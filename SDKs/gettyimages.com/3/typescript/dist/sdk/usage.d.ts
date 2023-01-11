import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Usage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * putV3UsageBatchesId - Report usage of assets via a batch format.
     *
     * # Report Usage
     *
     * Use this endpoint to report the usages of a set of assets. The count of assets submitted in a single batch to this endpoint is limited to 1000. Note that all asset Ids specified must be valid or the operation will fail causing no usages to be recorded. In this case, you will need to remove the invalid asset Ids from the query request and re-submit the query.
     *
     * ##  Quickstart
     *
     * You'll need an API key and a [Resource Owner Grant](http://developers.gettyimages.com/en/authorization-faq.html) access token to use this resource.
     * Please see our [Getting Started](http://developers.gettyimages.com/en/getting-started.html) page for more information on how to sign up for an API key.
     *
     * _Note_: Date of use can be in any unambiguous date format.
     *
    **/
    putV3UsageBatchesId(req: operations.PutV3UsageBatchesIdRequest, config?: AxiosRequestConfig): Promise<operations.PutV3UsageBatchesIdResponse>;
}
