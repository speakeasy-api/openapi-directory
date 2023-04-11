import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestRoomUsersRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Filter string
     */
    filter?: string;
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
    roomId: number;
    /**
     * Sort string
     */
    sort?: string;
}
export declare class RequestRoomUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    roomUserList?: shared.RoomUserList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
