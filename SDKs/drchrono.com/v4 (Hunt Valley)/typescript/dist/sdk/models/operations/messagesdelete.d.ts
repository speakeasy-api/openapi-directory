import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MessagesDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MessagesDeleteRequest extends SpeakeasyBase {
    pathParams: MessagesDeletePathParams;
    queryParams: MessagesDeleteQueryParams;
    security: MessagesDeleteSecurity;
}
export declare class MessagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
