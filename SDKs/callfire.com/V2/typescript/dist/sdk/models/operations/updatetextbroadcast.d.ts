import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTextBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateTextBroadcastRequest extends SpeakeasyBase {
    /**
     * A TextBroadcast object
     */
    textBroadcastInput?: shared.TextBroadcastInput;
    /**
     * An id of a text broadcast
     */
    id: number;
    /**
     * Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
     */
    strictValidation?: boolean;
}
export declare class UpdateTextBroadcastResponse extends SpeakeasyBase {
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
    textBroadcastCreateResponse?: shared.TextBroadcastCreateResponse;
}
