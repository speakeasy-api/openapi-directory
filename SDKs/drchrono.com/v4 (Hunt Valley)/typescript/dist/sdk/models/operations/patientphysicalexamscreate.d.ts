import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPhysicalExamsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientPhysicalExamsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientPhysicalExamsCreateRequest extends SpeakeasyBase {
    queryParams: PatientPhysicalExamsCreateQueryParams;
    security: PatientPhysicalExamsCreateSecurity;
}
export declare class PatientPhysicalExamsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientPhysicalExam?: shared.PatientPhysicalExam;
    statusCode: number;
}
