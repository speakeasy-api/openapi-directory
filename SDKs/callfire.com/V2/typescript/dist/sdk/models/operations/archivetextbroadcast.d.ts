import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArchiveTextBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ArchiveTextBroadcastRequest extends SpeakeasyBase {
    /**
     * An id of a text broadcast to archive
     */
    id: number;
}
export declare class ArchiveTextBroadcastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
