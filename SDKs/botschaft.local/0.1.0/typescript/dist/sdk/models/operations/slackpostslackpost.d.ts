import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SlackPostSlackPostRequest extends SpeakeasyBase {
    slackMessageRequest: shared.SlackMessageRequest;
    authorization?: string;
}
export declare class SlackPostSlackPostResponse extends SpeakeasyBase {
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
    slackPostSlackPost200ApplicationJSONAny?: any;
}
