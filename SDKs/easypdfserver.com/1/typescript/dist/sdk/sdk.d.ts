import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://api.easypdfserver.com"];
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
     * postMakePdf - Generate a PDF from HTML or URL.
    **/
    postMakePdf(req: operations.PostMakePdfRequest, config?: AxiosRequestConfig): Promise<operations.PostMakePdfResponse>;
}
