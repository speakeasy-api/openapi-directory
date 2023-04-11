import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
 */
export declare enum HandleRoomWebhookAssignmentsXSdsDateFormatEnum {
    Utc = "UTC",
    Local = "LOCAL",
    Offset = "OFFSET",
    Epoch = "EPOCH",
    Leet = "LEET"
}
export declare class HandleRoomWebhookAssignmentsRequest extends SpeakeasyBase {
    updateRoomWebhookRequest: shared.UpdateRoomWebhookRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
    /**
     * Date time format (cf. [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) & [leettime.de](http://leettime.de/))
     */
    xSdsDateFormat?: HandleRoomWebhookAssignmentsXSdsDateFormatEnum;
    /**
     * Room ID
     */
    roomId: number;
}
export declare class HandleRoomWebhookAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * OK
     */
    roomWebhookList?: shared.RoomWebhookList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
