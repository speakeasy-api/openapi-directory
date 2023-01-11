import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientCommunicationsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientCommunicationsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientCommunicationsCreateRequest extends SpeakeasyBase {
    queryParams: PatientCommunicationsCreateQueryParams;
    security: PatientCommunicationsCreateSecurity;
}
export declare class PatientCommunicationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientCommunication?: shared.PatientCommunication;
    statusCode: number;
}
