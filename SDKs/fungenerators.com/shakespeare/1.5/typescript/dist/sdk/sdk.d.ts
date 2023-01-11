import { AxiosInstance } from "axios";
import { Generation } from "./generation";
import { Translation } from "./translation";
import { Works } from "./works";
export declare const ServerList: readonly ["http://api.fungenerators.com", "https://api.fungenerators.com"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    generation: Generation;
    translation: Translation;
    works: Works;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
