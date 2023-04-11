import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TwilioMessagePostTwilioPostRequest extends SpeakeasyBase {
    twilioMessageRequest: shared.TwilioMessageRequest;
    authorization?: string;
}
export declare class TwilioMessagePostTwilioPostResponse extends SpeakeasyBase {
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
    twilioMessagePostTwilioPost200ApplicationJSONAny?: any;
}
