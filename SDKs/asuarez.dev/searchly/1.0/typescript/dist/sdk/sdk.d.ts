import { AxiosInstance } from "axios";
import { Similarity } from "./similarity";
import { Song } from "./song";
export declare const ServerList: readonly ["https://searchly.asuarez.dev/api/v1"];
export type SDKProps = {
    defaultClient?: AxiosInstance;
    serverUrl?: string;
};
export declare class SDK {
    similarity: Similarity;
    song: Song;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(props: SDKProps);
}
