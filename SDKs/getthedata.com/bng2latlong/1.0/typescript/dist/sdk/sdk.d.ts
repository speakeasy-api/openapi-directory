import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.getthedata.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
    /**
     * getBng2latlongEastingNorthing - Returns latitude and longitude for the given easting and northing.
     *
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
    **/
    getBng2latlongEastingNorthing(req: operations.GetBng2latlongEastingNorthingRequest, config?: AxiosRequestConfig): Promise<operations.GetBng2latlongEastingNorthingResponse>;
}
