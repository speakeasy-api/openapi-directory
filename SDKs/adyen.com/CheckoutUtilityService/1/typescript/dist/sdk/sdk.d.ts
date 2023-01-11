import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare const ServerList: readonly ["https://checkout-test.adyen.com/v1"];
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
     * postOriginKeys - Create originKey values for one or more merchant domains.
     *
     * This operation takes the origin domains and returns a JSON object containing the corresponding origin keys for the domains.
    **/
    postOriginKeys(req: operations.PostOriginKeysRequest, config?: AxiosRequestConfig): Promise<operations.PostOriginKeysResponse>;
}
