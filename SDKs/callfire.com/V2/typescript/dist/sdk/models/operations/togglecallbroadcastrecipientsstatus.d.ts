import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ToggleCallBroadcastRecipientsStatusSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ToggleCallBroadcastRecipientsStatusRequest extends SpeakeasyBase {
    /**
     * List of Recipient objects. By recipient we mean either phone number or contact id.
     */
    requestBody?: shared.Recipient[];
    /**
     * Flag which indicate what to do with calls (true will enable call in DISABLED status and vice versa)
     */
    enable?: boolean;
    /**
     * An id of a voice broadcast
     */
    id: number;
}
export declare class ToggleCallBroadcastRecipientsStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
