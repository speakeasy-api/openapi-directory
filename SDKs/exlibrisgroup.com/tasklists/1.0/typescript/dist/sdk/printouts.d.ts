import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Printouts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve Printouts
     *
     * @remarks
     * This API returns a list of Printouts.
     */
    getAlmawsV1TaskListsPrintouts(req: operations.GetAlmawsV1TaskListsPrintoutsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlmawsV1TaskListsPrintoutsResponse>;
    /**
     * Retrieve a Printout
     *
     * @remarks
     * This Web service returns a Printout given a Printout ID.
     */
    getAlmawsV1TaskListsPrintoutsPrintoutId(req: operations.GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAlmawsV1TaskListsPrintoutsPrintoutIdResponse>;
    /**
     * Act on Printouts
     *
     * @remarks
     * This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.
     */
    postAlmawsV1TaskListsPrintouts(req: operations.PostAlmawsV1TaskListsPrintoutsRequest, config?: AxiosRequestConfig): Promise<operations.PostAlmawsV1TaskListsPrintoutsResponse>;
    /**
     * Printout Service
     *
     * @remarks
     * This API operates on an printout. given a Printout ID.
     */
    postAlmawsV1TaskListsPrintoutsPrintoutId(req: operations.PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest, config?: AxiosRequestConfig): Promise<operations.PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse>;
}
