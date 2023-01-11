import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MessagesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MessagesReadRequest extends SpeakeasyBase {
    pathParams: MessagesReadPathParams;
    queryParams: MessagesReadQueryParams;
    security: MessagesReadSecurity;
}
export declare class MessagesReadResponse extends SpeakeasyBase {
    contentType: string;
    doctorMessage?: shared.DoctorMessage;
    statusCode: number;
}
