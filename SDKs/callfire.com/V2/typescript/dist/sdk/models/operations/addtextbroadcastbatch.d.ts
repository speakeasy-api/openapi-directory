import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AddTextBroadcastBatchSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class AddTextBroadcastBatchRequest extends SpeakeasyBase {
    /**
     * A request object
     */
    batchRequest?: shared.BatchRequest;
    /**
     * An id of a text broadcast
     */
    id: number;
    /**
     * Turns on strict validation for recipients. System will reply with BAD_REQUEST(400) if strictValidation = true and one of numbers didn't pass validation
     */
    strictValidation?: boolean;
}
export declare class AddTextBroadcastBatchResponse extends SpeakeasyBase {
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
