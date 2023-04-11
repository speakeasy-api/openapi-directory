import { SpeakeasyBase } from "../../../internal/utils";
import { SMSTemplateResponse } from "./smstemplateresponse";
/**
 * Success
 */
export declare class GetSmsTemplateResponse extends SpeakeasyBase {
    /**
     * Provides information about the content and settings for a message template that can be used in text messages that are sent through the SMS channel.
     */
    smsTemplateResponse: SMSTemplateResponse;
}
