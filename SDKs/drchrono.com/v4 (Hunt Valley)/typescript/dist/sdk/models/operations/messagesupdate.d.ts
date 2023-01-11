import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MessagesUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MessagesUpdateRequest extends SpeakeasyBase {
    pathParams: MessagesUpdatePathParams;
    queryParams: MessagesUpdateQueryParams;
    security: MessagesUpdateSecurity;
}
export declare class MessagesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
