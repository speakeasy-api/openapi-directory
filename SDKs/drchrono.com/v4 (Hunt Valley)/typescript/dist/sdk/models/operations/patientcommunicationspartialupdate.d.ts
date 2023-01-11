import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientCommunicationsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientCommunicationsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientCommunicationsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientCommunicationsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientCommunicationsPartialUpdatePathParams;
    queryParams: PatientCommunicationsPartialUpdateQueryParams;
    security: PatientCommunicationsPartialUpdateSecurity;
}
export declare class PatientCommunicationsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
