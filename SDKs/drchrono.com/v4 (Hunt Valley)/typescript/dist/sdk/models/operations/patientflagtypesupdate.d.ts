import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientFlagTypesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientFlagTypesUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
}
export declare class PatientFlagTypesUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientFlagTypesUpdateRequest extends SpeakeasyBase {
    pathParams: PatientFlagTypesUpdatePathParams;
    queryParams: PatientFlagTypesUpdateQueryParams;
    security: PatientFlagTypesUpdateSecurity;
}
export declare class PatientFlagTypesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
