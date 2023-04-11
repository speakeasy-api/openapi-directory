import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestLastAdminRoomsUsersRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * User ID
     */
    userId: number;
}
export declare class RequestLastAdminRoomsUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    lastAdminUserRoomList?: shared.LastAdminUserRoomList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
