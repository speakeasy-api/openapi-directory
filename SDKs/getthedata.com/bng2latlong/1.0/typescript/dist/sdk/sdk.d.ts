import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.getthedata.com"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
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
 * Convert an OSGB36 easting and northing (British National Grid) to WGS84 latitude and longitude.
 *
 * @see {@link https://www.getthedata.com/bng2latlong} - Full documentation
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * Returns latitude and longitude for the given easting and northing.
     *
     * @remarks
     * Takes an OSGB36 easting and northing (British National Grid) and returns the geographically equivalent WGS84 latitude and longitude.
     * #### A successful request returns the following fields:
     * * status - this will be `ok`
     * * easting - the easting provided in the request
     * * northing - the northing provided in the request
     * * latitude - the latitude of the converted coordinates
     * * longitude - the longitude of the converted coordinates
     * #### An unsuccessful request returns the following fields:
     * * status - this will be `error`
     * * error - an error message
     *
     */
    getBng2latlongEastingNorthing(req: operations.GetBng2latlongEastingNorthingRequest, config?: AxiosRequestConfig): Promise<operations.GetBng2latlongEastingNorthingResponse>;
}
