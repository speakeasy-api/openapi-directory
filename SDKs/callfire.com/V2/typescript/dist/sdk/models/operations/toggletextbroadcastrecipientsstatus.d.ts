import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ToggleTextBroadcastRecipientsStatusSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ToggleTextBroadcastRecipientsStatusRequest extends SpeakeasyBase {
    /**
     * List of Recipient objects. By recipient we mean either phone number or contact id.
     */
    requestBody?: shared.Recipient[];
    /**
     * Flag which indicate what to do with texts (true will enable texts in DISABLED status and vice versa)
     */
    enable?: boolean;
    /**
     * An id of a text broadcast
     */
    id: number;
}
export declare class ToggleTextBroadcastRecipientsStatusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
