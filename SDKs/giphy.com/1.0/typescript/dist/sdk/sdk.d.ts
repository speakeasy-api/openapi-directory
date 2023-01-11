import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Gifs } from "./gifs";
import { Stickers } from "./stickers";
export declare const ServerList: readonly ["https://api.giphy.com/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    gifs: Gifs;
    stickers: Stickers;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
