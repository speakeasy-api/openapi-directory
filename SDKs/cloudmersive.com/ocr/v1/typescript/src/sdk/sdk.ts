import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { ImageOcr } from "./imageocr";
import { PdfOcr } from "./pdfocr";
import { Preprocessing } from "./preprocessing";
import { Receipts } from "./receipts";


export const ServerList = [
	"https://api.cloudmersive.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public imageOcr: ImageOcr;
  public pdfOcr: PdfOcr;
  public preprocessing: Preprocessing;
  public receipts: Receipts;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    this._securityClient = this._defaultClient;
    
    this.imageOcr = new ImageOcr(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.pdfOcr = new PdfOcr(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.preprocessing = new Preprocessing(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.receipts = new Receipts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}