import { ChargeStations } from "./chargestations";
import { Commands } from "./commands";
import { Configurations } from "./configurations";
import { Connectors } from "./connectors";
import { Drivers } from "./drivers";
import { Locations } from "./locations";
import * as shared from "./models/shared";
import { Organizations } from "./organizations";
import { Realtime } from "./realtime";
import { Reservations } from "./reservations";
import { SmartCharging } from "./smartcharging";
import { Tokens } from "./tokens";
import { Transactions } from "./transactions";
import { Vehicles } from "./vehicles";
import { AxiosInstance } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["//api.edrv.io"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security;
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * edrv.io API Documentation
 */
export declare class SDK {
    chargeStations: ChargeStations;
    commands: Commands;
    configurations: Configurations;
    connectors: Connectors;
    drivers: Drivers;
    locations: Locations;
    organizations: Organizations;
    realtime: Realtime;
    reservations: Reservations;
    smartCharging: SmartCharging;
    tokens: Tokens;
    transactions: Transactions;
    vehicles: Vehicles;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
}
