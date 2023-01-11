import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientCommunicationsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientCommunicationsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientCommunicationsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientCommunicationsReadRequest extends SpeakeasyBase {
    pathParams: PatientCommunicationsReadPathParams;
    queryParams: PatientCommunicationsReadQueryParams;
    security: PatientCommunicationsReadSecurity;
}
export declare class PatientCommunicationsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientCommunication?: shared.PatientCommunication;
    statusCode: number;
}
