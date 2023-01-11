import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Boundaries } from "./boundaries";
import { FarmOrganizations } from "./farmorganizations";
import { Fields } from "./fields";
import { Layers } from "./layers";
import { ResourceOwners } from "./resourceowners";
import { Uploads } from "./uploads";


export const ServerList = [
	"https://platform.climate.com/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public boundaries: Boundaries;
  public farmOrganizations: FarmOrganizations;
  public fields: Fields;
  public layers: Layers;
  public resourceOwners: ResourceOwners;
  public uploads: Uploads;

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
    
    this.boundaries = new Boundaries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.farmOrganizations = new FarmOrganizations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.fields = new Fields(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.layers = new Layers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.resourceOwners = new ResourceOwners(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.uploads = new Uploads(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}