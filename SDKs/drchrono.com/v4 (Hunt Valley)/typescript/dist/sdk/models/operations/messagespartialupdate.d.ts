import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MessagesPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MessagesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: MessagesPartialUpdatePathParams;
    queryParams: MessagesPartialUpdateQueryParams;
    security: MessagesPartialUpdateSecurity;
}
export declare class MessagesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
