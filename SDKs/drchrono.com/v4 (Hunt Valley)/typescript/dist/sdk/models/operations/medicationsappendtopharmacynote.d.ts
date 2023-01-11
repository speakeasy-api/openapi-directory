import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MedicationsAppendToPharmacyNotePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MedicationsAppendToPharmacyNoteQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class MedicationsAppendToPharmacyNoteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MedicationsAppendToPharmacyNoteRequest extends SpeakeasyBase {
    pathParams: MedicationsAppendToPharmacyNotePathParams;
    queryParams: MedicationsAppendToPharmacyNoteQueryParams;
    security: MedicationsAppendToPharmacyNoteSecurity;
}
export declare class MedicationsAppendToPharmacyNoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
