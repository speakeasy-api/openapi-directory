import { AxiosInstance } from "axios";
import { Chargers } from "./chargers";
import { ChargingLocations } from "./charginglocations";
import { Me } from "./me";
import { ServiceHealth } from "./servicehealth";
import { Statistics } from "./statistics";
import { UserManagement } from "./usermanagement";
import { Vehicles } from "./vehicles";
import { Webhooks } from "./webhooks";
export declare const ServerList: readonly ["https://api.test.enode.io/"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    chargers: Chargers;
    chargingLocations: ChargingLocations;
    me: Me;
    serviceHealth: ServiceHealth;
    statistics: Statistics;
    userManagement: UserManagement;
    vehicles: Vehicles;
    webhooks: Webhooks;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
