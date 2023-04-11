import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTextBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateTextBroadcastRequest extends SpeakeasyBase {
    /**
     * A TextBroadcast object
     */
    textBroadcastInput?: shared.TextBroadcastInput;
    /**
     * If true then starts the campaign immediately (not required).
     */
    start?: boolean;
    /**
     * Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
     */
    strictValidation?: boolean;
}
export declare class CreateTextBroadcastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * successful operation
     */
    resourceId?: shared.ResourceId;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
