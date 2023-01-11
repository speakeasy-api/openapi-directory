import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { DocumentClassification } from "./documentclassification";
import { InformationRetrieval } from "./informationretrieval";
import { Metrics } from "./metrics";


export const ServerList = [
	"http://api.datumbox.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public documentClassification: DocumentClassification;
  public informationRetrieval: InformationRetrieval;
  public metrics: Metrics;

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
    
    this.documentClassification = new DocumentClassification(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.informationRetrieval = new InformationRetrieval(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.metrics = new Metrics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}