import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";

import { HeadlessChrome } from "./headlesschrome";
import { LibreOffice } from "./libreoffice";
import { MergeCombinePdfs } from "./mergecombinepdfs";
import { ZxingZebraCrossingBarCodes } from "./zxingzebracrossingbarcodes";
import { Wkhtmltopdf } from "./wkhtmltopdf";


export const ServerList = [
	"https://v2018.api2pdf.com",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}

/* SDK Documentation: https://www.api2pdf.com - Find out more about Api2Pdf*/
export class SDK {
  public headlessChrome: HeadlessChrome;
  public libreOffice: LibreOffice;
  public mergeCombinePdfs: MergeCombinePdfs;
  public zxingZebraCrossingBarCodes: ZxingZebraCrossingBarCodes;
  public wkhtmltopdf: Wkhtmltopdf;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }
    
    this.headlessChrome = new HeadlessChrome(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.libreOffice = new LibreOffice(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.mergeCombinePdfs = new MergeCombinePdfs(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.zxingZebraCrossingBarCodes = new ZxingZebraCrossingBarCodes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.wkhtmltopdf = new Wkhtmltopdf(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}