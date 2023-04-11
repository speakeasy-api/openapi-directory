import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiscordGetDiscordGetRequest extends SpeakeasyBase {
    authorization?: string;
    base64Message?: string;
    channel: string;
    message?: string;
}
export declare class DiscordGetDiscordGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Response
     */
    discordGetDiscordGet200ApplicationJSONAny?: any;
}
