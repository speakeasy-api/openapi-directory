import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SendTextsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class SendTextsRequest extends SpeakeasyBase {
    /**
     * List of TextRecipient objects. By recipient we mean either phone number or contact with user-defined attributes added to action. Text messaging supports media files, provide a list of ids of media files for recipient to attach media to the message.
     */
    requestBody?: shared.TextRecipient[];
    /**
     * Specifies a campaignId to send texts through a previously created campaign
     */
    campaignId?: number;
    /**
     * Text message can be overridden by TextRecipient.message field. If multiple recipients have the same text message to a different recipients it is better to specify a single default message and do not duplicate it in each recipient.
     */
    defaultMessage?: string;
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * Turns on strict validation for recipients
     */
    strictValidation?: boolean;
}
export declare class SendTextsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    textList?: shared.TextList;
}
