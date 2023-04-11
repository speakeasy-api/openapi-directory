import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteTextAutoReplySecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteTextAutoReplyRequest extends SpeakeasyBase {
    /**
     * An id of a text auto reply
     */
    id: number;
}
export declare class DeleteTextAutoReplyResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
