import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StartVoiceBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class StartVoiceBroadcastRequest extends SpeakeasyBase {
    /**
     * An id of voice broadcast to start
     */
    id: number;
}
export declare class StartVoiceBroadcastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
