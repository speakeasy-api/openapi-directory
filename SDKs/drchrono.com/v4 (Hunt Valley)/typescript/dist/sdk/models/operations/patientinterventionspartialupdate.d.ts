import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientInterventionsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientInterventionsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientInterventionsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientInterventionsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientInterventionsPartialUpdatePathParams;
    queryParams: PatientInterventionsPartialUpdateQueryParams;
    security: PatientInterventionsPartialUpdateSecurity;
}
export declare class PatientInterventionsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
