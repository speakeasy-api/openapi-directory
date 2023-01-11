import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPhysicalExamsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientPhysicalExamsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientPhysicalExamsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientPhysicalExamsUpdateRequest extends SpeakeasyBase {
    pathParams: PatientPhysicalExamsUpdatePathParams;
    queryParams: PatientPhysicalExamsUpdateQueryParams;
    security: PatientPhysicalExamsUpdateSecurity;
}
export declare class PatientPhysicalExamsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
