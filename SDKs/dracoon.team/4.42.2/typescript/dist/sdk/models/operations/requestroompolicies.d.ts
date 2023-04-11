import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RequestRoomPoliciesRequest extends SpeakeasyBase {
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Room ID
     */
    roomId: number;
}
export declare class RequestRoomPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    roomPolicies?: shared.RoomPolicies;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
