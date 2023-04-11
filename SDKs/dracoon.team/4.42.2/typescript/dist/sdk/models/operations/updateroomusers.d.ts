import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateRoomUsersRequest extends SpeakeasyBase {
    roomUsersAddBatchRequest: shared.RoomUsersAddBatchRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Room ID
     */
    roomId: number;
}
export declare class UpdateRoomUsersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
