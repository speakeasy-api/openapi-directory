import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientMessagesCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientMessagesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientMessagesCreateRequest extends SpeakeasyBase {
    queryParams: PatientMessagesCreateQueryParams;
    security: PatientMessagesCreateSecurity;
}
export declare class PatientMessagesCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientMessage?: shared.PatientMessage;
    statusCode: number;
}
