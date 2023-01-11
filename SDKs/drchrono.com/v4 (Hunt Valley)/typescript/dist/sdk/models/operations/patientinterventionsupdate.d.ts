import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientInterventionsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientInterventionsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientInterventionsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientInterventionsUpdateRequest extends SpeakeasyBase {
    pathParams: PatientInterventionsUpdatePathParams;
    queryParams: PatientInterventionsUpdateQueryParams;
    security: PatientInterventionsUpdateSecurity;
}
export declare class PatientInterventionsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
