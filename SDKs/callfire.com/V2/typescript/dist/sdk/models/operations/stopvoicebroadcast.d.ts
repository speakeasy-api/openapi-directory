import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopVoiceBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class StopVoiceBroadcastRequest extends SpeakeasyBase {
    /**
     * An id of voice broadcast to stop
     */
    id: number;
}
export declare class StopVoiceBroadcastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
