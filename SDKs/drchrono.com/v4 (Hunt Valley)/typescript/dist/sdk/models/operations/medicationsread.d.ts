import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MedicationsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class MedicationsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class MedicationsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MedicationsReadRequest extends SpeakeasyBase {
    pathParams: MedicationsReadPathParams;
    queryParams: MedicationsReadQueryParams;
    security: MedicationsReadSecurity;
}
export declare class MedicationsReadResponse extends SpeakeasyBase {
    contentType: string;
    patientDrug?: shared.PatientDrug;
    statusCode: number;
}
