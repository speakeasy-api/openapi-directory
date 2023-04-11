import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestLastAdminRoomsGroupsRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Group ID
     */
    groupId: number;
}
export declare class RequestLastAdminRoomsGroupsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    lastAdminGroupRoomList?: shared.LastAdminGroupRoomList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
