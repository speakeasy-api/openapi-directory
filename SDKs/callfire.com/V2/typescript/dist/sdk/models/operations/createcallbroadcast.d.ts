import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCallBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateCallBroadcastRequest extends SpeakeasyBase {
    /**
     * A CallBroadcast object
     */
    callBroadcastInput?: shared.CallBroadcastInput;
    /**
     * Specify whether to immediately start this campaign (not required)
     */
    start?: boolean;
    /**
     * Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
     */
    strictValidation?: boolean;
}
export declare class CreateCallBroadcastResponse extends SpeakeasyBase {
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
