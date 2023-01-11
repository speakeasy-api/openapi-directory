import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://amentum.space/wmm"];
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
     * appApiWmmEndpointsWmmMagneticField - Calculate magnetic declination, inclination, total field intensity, and grid variation
     *
     *
     * at specified conditions.
     *
    **/
    appApiWmmEndpointsWmmMagneticField(req: operations.AppApiWmmEndpointsWmmMagneticFieldRequest, config?: AxiosRequestConfig): Promise<operations.AppApiWmmEndpointsWmmMagneticFieldResponse>;
}
