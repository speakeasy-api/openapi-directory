import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class StopTextBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class StopTextBroadcastRequest extends SpeakeasyBase {
    /**
     * An Id of a text broadcast. To stop the broadcast
     */
    id: number;
}
export declare class StopTextBroadcastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
