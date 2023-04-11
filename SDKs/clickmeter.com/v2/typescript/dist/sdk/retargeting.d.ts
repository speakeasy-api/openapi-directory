import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Retargeting {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve count of retargeting scripts
     */
    retargetingCount(config?: AxiosRequestConfig): Promise<operations.RetargetingCountResponse>;
    /**
     * Deletes a retargeting script (and remove associations)
     */
    retargetingDelete(req: operations.RetargetingDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingDeleteResponse>;
    /**
     * List of all the retargeting scripts associated to the user
     */
    retargetingGet(req: operations.RetargetingGetRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingGetResponse>;
    /**
     * List of all the datapoints associated to the retargeting script.
     */
    retargetingGetDatapoints(req: operations.RetargetingGetDatapointsRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingGetDatapointsResponse>;
    /**
     * Count the datapoints associated to the retargeting script.
     */
    retargetingGetDatapointsCount(req: operations.RetargetingGetDatapointsCountRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingGetDatapointsCountResponse>;
    /**
     * Updates a retargeting script
     */
    retargetingPostForm(req: operations.RetargetingPostFormRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingPostFormResponse>;
    /**
     * Updates a retargeting script
     */
    retargetingPostJson(req: operations.RetargetingPostJsonRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingPostJsonResponse>;
    /**
     * Updates a retargeting script
     */
    retargetingPostRaw(req: operations.RetargetingPostRawRequest, config?: AxiosRequestConfig): Promise<operations.RetargetingPostRawResponse>;
    /**
     * Creates a retargeting script
     */
    retargetingPutForm(req: shared.ApiCoreDtoRetargetingRetargetingScript, config?: AxiosRequestConfig): Promise<operations.RetargetingPutFormResponse>;
    /**
     * Creates a retargeting script
     */
    retargetingPutJson(req: shared.ApiCoreDtoRetargetingRetargetingScript, config?: AxiosRequestConfig): Promise<operations.RetargetingPutJsonResponse>;
    /**
     * Creates a retargeting script
     */
    retargetingPutRaw(req: Uint8Array, config?: AxiosRequestConfig): Promise<operations.RetargetingPutRawResponse>;
    /**
     * Get a retargeting script object
     */
    getRetargetingId(req: operations.GetRetargetingIdRequest, config?: AxiosRequestConfig): Promise<operations.GetRetargetingIdResponse>;
}
