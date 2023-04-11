import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Determines which key should be used (NEW)
 */
export declare enum RequestMissingFileKeysUseKeyEnum {
    RoomRescueKey = "room_rescue_key",
    SystemRescueKey = "system_rescue_key",
    PreviousUserKey = "previous_user_key",
    PreviousRoomRescueKey = "previous_room_rescue_key",
    PreviousSystemRescueKey = "previous_system_rescue_key"
}
export declare class RequestMissingFileKeysRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * File ID
     */
    fileId?: number;
    /**
     * Range limit.
     *
     * @remarks
     *
     * Maximum 500.
     *
     *  For more results please use paging (`offset` + `limit`).
     */
    limit?: number;
    /**
     * Range offset
     */
    offset?: number;
    /**
     * Room ID
     */
    roomId?: number;
    /**
     * Determines which key should be used (NEW)
     */
    useKey?: RequestMissingFileKeysUseKeyEnum;
    /**
     * User ID
     */
    userId?: number;
}
export declare class RequestMissingFileKeysResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    missingKeysResponse?: shared.MissingKeysResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
