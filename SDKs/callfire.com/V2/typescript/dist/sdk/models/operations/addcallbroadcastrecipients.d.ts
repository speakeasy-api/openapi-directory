import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddCallBroadcastRecipientsSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class AddCallBroadcastRecipientsRequest extends SpeakeasyBase {
    /**
     * A list of CallRecipient objects
     */
    requestBody?: shared.Recipient[];
    /**
     * Limit fields received in response. E.g. fields: id, name or fields items (id, name), see more at [partial response](https://developers.callfire.com/docs.html#partial-response) page.
     */
    fields?: string;
    /**
     * An id of a call broadcast
     */
    id: number;
    /**
     * Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
     */
    strictValidation?: boolean;
}
export declare class AddCallBroadcastRecipientsResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    callList?: shared.CallList;
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
