import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartTextBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class StartTextBroadcastRequest extends SpeakeasyBase {
    /**
     * An id of a text broadcast to start
     */
    id: number;
}
export declare class StartTextBroadcastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
