import { AxiosInstance } from "axios";
import { UuidGeneration } from "./uuidgeneration";
import { UuidParsing } from "./uuidparsing";
export declare const ServerList: readonly ["https://api.fungenerators.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    uuidGeneration: UuidGeneration;
    uuidParsing: UuidParsing;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
