import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    owner?: number;
    patient?: number;
    receivedSince?: string;
    responsibleUser?: number;
    type?: string;
    updatedSince?: string;
}
export declare class MessagesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MessagesCreateRequest extends SpeakeasyBase {
    queryParams: MessagesCreateQueryParams;
    security: MessagesCreateSecurity;
}
export declare class MessagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    doctorMessage?: shared.DoctorMessage;
    statusCode: number;
}
