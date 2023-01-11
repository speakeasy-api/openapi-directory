import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { AirtravelCoordinates } from "./airtravelcoordinates";
import { EcommerceDelivery } from "./ecommercedelivery";
import { RequestApiKey } from "./requestapikey";
import { RoadDistance } from "./roaddistance";
import { UrbanDelivery } from "./urbandelivery";
import { AirtravelMultileg } from "./airtravelmultileg";


export const ServerList = [
	"http://api.climatekuul.com:8000/footprint",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public airtravelCoordinates: AirtravelCoordinates;
  public ecommerceDelivery: EcommerceDelivery;
  public requestApiKey: RequestApiKey;
  public roadDistance: RoadDistance;
  public urbanDelivery: UrbanDelivery;
  public airtravelMultileg: AirtravelMultileg;

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
    
    this.airtravelCoordinates = new AirtravelCoordinates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.ecommerceDelivery = new EcommerceDelivery(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.requestApiKey = new RequestApiKey(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.roadDistance = new RoadDistance(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.urbanDelivery = new UrbanDelivery(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.airtravelMultileg = new AirtravelMultileg(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}