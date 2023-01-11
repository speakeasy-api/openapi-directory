import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ClassificationInclusion {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getClassificationInclusions - Get ClassificationInclusion records
     *
     * Classification Inclusions connect classifications with entities like series, episodes, or campaigns, amongst others.
     *
     * In order to retrieve a set of classification inclusions, at least one of the following filter parameters must
     * be provided. Failing to do so renders a `400 Bad Request` response.
     *
     * - `ids[]`
     * - `classified_id` and `classified_type`
     * - `classified_id` and `classification_type`
     * - `classification_id` and `classified_type`
     *
    **/
    getClassificationInclusions(req: operations.GetClassificationInclusionsRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationInclusionsResponse>;
    /**
     * getClassificationInclusionsId - Get a specific classification inclusion
    **/
    getClassificationInclusionsId(req: operations.GetClassificationInclusionsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetClassificationInclusionsIdResponse>;
}
