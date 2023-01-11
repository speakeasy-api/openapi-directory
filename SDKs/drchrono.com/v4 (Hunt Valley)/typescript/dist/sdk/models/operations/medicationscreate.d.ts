import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MedicationsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class MedicationsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MedicationsCreateRequest extends SpeakeasyBase {
    queryParams: MedicationsCreateQueryParams;
    security: MedicationsCreateSecurity;
}
export declare class MedicationsCreateResponse extends SpeakeasyBase {
    contentType: string;
    patientDrug?: shared.PatientDrug;
    statusCode: number;
}
