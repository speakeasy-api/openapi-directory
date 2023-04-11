import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Create {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a point-to-multipoint heatmap
     *
     * @remarks
     * An area coverage assumes the same receiver height at all locations out to fixed radius (maximum 300km). Due to it's exhaustive processing it is the slowest of all the API calls. Speed can be improved significantly by adjusting the resolution 'res' parameter. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.
     */
    area(req: operations.AreaRequestBody, security: operations.AreaSecurity, config?: AxiosRequestConfig): Promise<operations.AreaResponse>;
    /**
     * Point-to-point path profile analysis (Tx to Rx)
     *
     * @remarks
     * A path profile is a single link from A to B. It is much faster than an area calculation and can be used out to 300km. A basic request needs transmitter, receiver, antenna and output objects defined as a minimum. Model and environment options will enhance accuracy.
     */
    path(req: operations.PathRequestBody, security: operations.PathSecurity, config?: AxiosRequestConfig): Promise<operations.PathResponse>;
    /**
     * Point-to-multipoint path profile analysis (Many Tx, one Rx)
     *
     * @remarks
     * The points function tests many transmitters and one receiver and is designed for route analysis. A minimal request needs a transmitters array of (latitude,longitude,altitude) locations, antenna, receiver and output objects defined as a minimum. Model and environment options will enhance accuracy.
     */
    points(req: operations.PointsRequestBody, security: operations.PointsSecurity, config?: AxiosRequestConfig): Promise<operations.PointsResponse>;
}
