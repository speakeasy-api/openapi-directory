import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Printouts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAlmawsV1TaskListsPrintouts - Retrieve Printouts
     *
     * This API returns a list of Printouts.
    **/
    getAlmawsV1TaskListsPrintouts(req: operations.GetAlmawsV1TaskListsPrintoutsRequest, config?: AxiosRequestConfig): Promise<operations.GetAlmawsV1TaskListsPrintoutsResponse>;
    /**
     * getAlmawsV1TaskListsPrintoutsPrintoutId - Retrieve a Printout
     *
     * This Web service returns a Printout given a Printout ID.
    **/
    getAlmawsV1TaskListsPrintoutsPrintoutId(req: operations.GetAlmawsV1TaskListsPrintoutsPrintoutIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAlmawsV1TaskListsPrintoutsPrintoutIdResponse>;
    /**
     * postAlmawsV1TaskListsPrintouts - Act on Printouts
     *
     * This API performs an action on printouts: mark as printed or canceled. 10,000 records can be handled in one requests. Only printouts which were updated will be returned.
    **/
    postAlmawsV1TaskListsPrintouts(req: operations.PostAlmawsV1TaskListsPrintoutsRequest, config?: AxiosRequestConfig): Promise<operations.PostAlmawsV1TaskListsPrintoutsResponse>;
    /**
     * postAlmawsV1TaskListsPrintoutsPrintoutId - Printout Service
     *
     * This API operates on an printout. given a Printout ID.
    **/
    postAlmawsV1TaskListsPrintoutsPrintoutId(req: operations.PostAlmawsV1TaskListsPrintoutsPrintoutIdRequest, config?: AxiosRequestConfig): Promise<operations.PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse>;
}
