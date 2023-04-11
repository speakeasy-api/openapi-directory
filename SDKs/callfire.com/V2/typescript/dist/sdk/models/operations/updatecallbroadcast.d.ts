import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateCallBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateCallBroadcastRequest extends SpeakeasyBase {
    /**
     * A CallBroadcast object
     */
    callBroadcastInput?: shared.CallBroadcastInput;
    /**
     * An id of a voice broadcast
     */
    id: number;
    /**
     * Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
     */
    strictValidation?: boolean;
}
export declare class UpdateCallBroadcastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
