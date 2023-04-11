import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TwilioMessageGetTwilioGetRequest extends SpeakeasyBase {
    authorization?: string;
    base64Message?: string;
    message?: string;
    to: string;
}
export declare class TwilioMessageGetTwilioGetResponse extends SpeakeasyBase {
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
    twilioMessageGetTwilioGet200ApplicationJSONAny?: any;
}
