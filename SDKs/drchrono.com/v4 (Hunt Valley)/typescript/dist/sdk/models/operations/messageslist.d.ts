import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesListQueryParams extends SpeakeasyBase {
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
export declare class MessagesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class MessagesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.DoctorMessage[];
    next?: string;
    previous?: string;
}
export declare class MessagesListRequest extends SpeakeasyBase {
    queryParams: MessagesListQueryParams;
    security: MessagesListSecurity;
}
export declare class MessagesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    messagesList200ApplicationJSONObject?: MessagesList200ApplicationJson;
}
