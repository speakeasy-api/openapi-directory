import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MessagesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class MessagesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    owner?: number;
    pageSize?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
/**
 * Paginated Result
 */
export declare class MessagesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.DoctorMessage[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class MessagesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    messagesList200ApplicationJSONObject?: MessagesList200ApplicationJSON;
}
