import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientPhysicalExamsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientPhysicalExamsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientPhysicalExamsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientPhysicalExamsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientPhysicalExamsPartialUpdatePathParams;
    queryParams: PatientPhysicalExamsPartialUpdateQueryParams;
    security: PatientPhysicalExamsPartialUpdateSecurity;
}
export declare class PatientPhysicalExamsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
