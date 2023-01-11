import { AxiosInstance } from "axios";
import { DealItem } from "./dealitem";
import { Event } from "./event";
import { EventItem } from "./eventitem";
export declare const ServerList: readonly ["https://api.ebay.com{basePath}"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    dealItem: DealItem;
    event: Event;
    eventItem: EventItem;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
