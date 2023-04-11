import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SlackGetSlackGetRequest extends SpeakeasyBase {
    authorization?: string;
    base64Message?: string;
    channel: string;
    message?: string;
}
export declare class SlackGetSlackGetResponse extends SpeakeasyBase {
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
    slackGetSlackGet200ApplicationJSONAny?: any;
}
