import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MedicationsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class MedicationsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class MedicationsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientDrug[];
    next?: string;
    previous?: string;
}
export declare class MedicationsListRequest extends SpeakeasyBase {
    queryParams: MedicationsListQueryParams;
    security: MedicationsListSecurity;
}
export declare class MedicationsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    medicationsList200ApplicationJSONObject?: MedicationsList200ApplicationJson;
}
