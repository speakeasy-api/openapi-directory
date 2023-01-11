import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Vehicle } from "./vehicle";


export const ServerList = [
	"https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry",
	"https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public vehicle: Vehicle;

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
    
    this.vehicle = new Vehicle(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}