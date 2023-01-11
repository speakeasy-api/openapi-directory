import { AxiosInstance } from "axios";
import { Rating } from "./rating";
export declare const ServerList: readonly ["https://tf689y3hbj.execute-api.us-east-1.amazonaws.com/prod/authorization"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    rating: Rating;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
