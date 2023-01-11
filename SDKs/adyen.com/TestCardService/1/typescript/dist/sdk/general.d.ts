import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class General {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * postCreateTestCardRanges - Creates one or more test card ranges.
     *
     * Creates one or more test card ranges.
    **/
    postCreateTestCardRanges(req: operations.PostCreateTestCardRangesRequest, config?: AxiosRequestConfig): Promise<operations.PostCreateTestCardRangesResponse>;
}
