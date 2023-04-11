import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Retry configuration will help you to resend a call or text if it was not delivered first time
 */
export declare class RetryConfig extends SpeakeasyBase {
    /**
     * Maximum number of retry attempts. Default value: 1
     */
    maxAttempts?: number;
    /**
     * A number of minutes between retry attempts. Default value: 60
     */
    minutesBetweenAttempts?: number;
    /**
     * A list of phone number types to retry. Available values: FIRST_NUMBER, HOME_PHONE, WORK_PHONE, MOBILE_PHONE
     */
    retryPhoneTypes?: string[];
    /**
     * List of result states when a call/text should be addressed to this contact again. Supports any combination of result statuses. Available values: LA, BUSY, AM, NO_ANS, SENT, RECEIVED, etc. See [call/text states and results](https://developers.callfire.com/results-responses-errors.html)
     */
    retryResults?: string[];
}
