import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MedicationsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MedicationsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class MedicationsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MedicationsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: MedicationsPartialUpdatePathParams;
    queryParams: MedicationsPartialUpdateQueryParams;
    security: MedicationsPartialUpdateSecurity;
}
export declare class MedicationsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
