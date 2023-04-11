import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DiscordPostDiscordPostRequest extends SpeakeasyBase {
    discordMessageRequest: shared.DiscordMessageRequest;
    authorization?: string;
}
export declare class DiscordPostDiscordPostResponse extends SpeakeasyBase {
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
    discordPostDiscordPost200ApplicationJSONAny?: any;
}
