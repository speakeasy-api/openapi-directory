import axios, { AxiosInstance } from "axios";
import * as utils from "../internal/utils";

import { Chargers } from "./chargers";
import { ChargingLocations } from "./charginglocations";
import { Me } from "./me";
import { ServiceHealth } from "./servicehealth";
import { Statistics } from "./statistics";
import { UserManagement } from "./usermanagement";
import { Vehicles } from "./vehicles";
import { Webhooks } from "./webhooks";


export const ServerList = [
	"https://api.test.enode.io/",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  serverUrl?: string;
}


export class SDK {
  public chargers: Chargers;
  public chargingLocations: ChargingLocations;
  public me: Me;
  public serviceHealth: ServiceHealth;
  public statistics: Statistics;
  public userManagement: UserManagement;
  public vehicles: Vehicles;
  public webhooks: Webhooks;

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
    
    this.chargers = new Chargers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.chargingLocations = new ChargingLocations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.me = new Me(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.serviceHealth = new ServiceHealth(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.statistics = new Statistics(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.userManagement = new UserManagement(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.vehicles = new Vehicles(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}