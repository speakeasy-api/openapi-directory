import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientFlagTypesCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class PatientFlagTypesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientFlagTypesCreateRequest extends SpeakeasyBase {
    queryParams: PatientFlagTypesCreateQueryParams;
    security: PatientFlagTypesCreateSecurity;
}
export declare class PatientFlagTypesCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientFlagType?: shared.PatientFlagType;
    statusCode: number;
}
