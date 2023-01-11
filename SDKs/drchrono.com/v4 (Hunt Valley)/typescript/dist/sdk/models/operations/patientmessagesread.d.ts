import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientMessagesReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientMessagesReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientMessagesReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientMessagesReadRequest extends SpeakeasyBase {
    pathParams: PatientMessagesReadPathParams;
    queryParams: PatientMessagesReadQueryParams;
    security: PatientMessagesReadSecurity;
}
export declare class PatientMessagesReadResponse extends SpeakeasyBase {
    contentType: string;
    patientMessage?: shared.PatientMessage;
    statusCode: number;
}
