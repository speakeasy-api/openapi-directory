import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MedicationsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MedicationsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class MedicationsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class MedicationsUpdateRequest extends SpeakeasyBase {
    pathParams: MedicationsUpdatePathParams;
    queryParams: MedicationsUpdateQueryParams;
    security: MedicationsUpdateSecurity;
}
export declare class MedicationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
