import { AxiosInstance } from "axios";
import { Security } from "./models/shared";
import { Console } from "./console";
import { Cq } from "./cq";
import { Crx } from "./crx";
import { Custom } from "./custom";
import { Granite } from "./granite";
import { Sling } from "./sling";
export declare const ServerList: readonly ["https://adobe.com/", "http://adobe.local"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    security?: Security;
    serverUrl?: string;
};
export declare class SDK {
    console: Console;
    cq: Cq;
    crx: Crx;
    custom: Custom;
    granite: Granite;
    sling: Sling;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
