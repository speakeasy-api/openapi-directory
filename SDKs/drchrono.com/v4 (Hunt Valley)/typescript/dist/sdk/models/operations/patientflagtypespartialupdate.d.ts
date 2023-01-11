import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientFlagTypesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientFlagTypesPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class PatientFlagTypesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientFlagTypesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientFlagTypesPartialUpdatePathParams;
    queryParams: PatientFlagTypesPartialUpdateQueryParams;
    security: PatientFlagTypesPartialUpdateSecurity;
}
export declare class PatientFlagTypesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
