import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArchiveVoiceBroadcastSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ArchiveVoiceBroadcastRequest extends SpeakeasyBase {
    /**
     * An id of a voice broadcast to archive
     */
    id: number;
}
export declare class ArchiveVoiceBroadcastResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
