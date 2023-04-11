import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Discord {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Discord Get
     */
    discordGetDiscordGet(req: operations.DiscordGetDiscordGetRequest, config?: AxiosRequestConfig): Promise<operations.DiscordGetDiscordGetResponse>;
    /**
     * Discord Post
     */
    discordPostDiscordPost(req: operations.DiscordPostDiscordPostRequest, config?: AxiosRequestConfig): Promise<operations.DiscordPostDiscordPostResponse>;
}
