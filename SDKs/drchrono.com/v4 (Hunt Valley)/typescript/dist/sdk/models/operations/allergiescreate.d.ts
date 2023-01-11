import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllergiesCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class AllergiesCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class AllergiesCreateRequest extends SpeakeasyBase {
    queryParams: AllergiesCreateQueryParams;
    security: AllergiesCreateSecurity;
}
export declare class AllergiesCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientAllergy?: shared.PatientAllergy;
    statusCode: number;
}
