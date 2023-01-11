import { AxiosInstance } from "axios";
import { PrivateRiddles } from "./privateriddles";
import { RandomRiddle } from "./randomriddle";
export declare const ServerList: readonly ["https://api.fungenerators.com", "http://api.fungenerators.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    privateRiddles: PrivateRiddles;
    randomRiddle: RandomRiddle;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
