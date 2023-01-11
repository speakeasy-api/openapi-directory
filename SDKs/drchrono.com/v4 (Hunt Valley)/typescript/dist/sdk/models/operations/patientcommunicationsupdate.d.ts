import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientCommunicationsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientCommunicationsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
}
export declare class PatientCommunicationsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientCommunicationsUpdateRequest extends SpeakeasyBase {
    pathParams: PatientCommunicationsUpdatePathParams;
    queryParams: PatientCommunicationsUpdateQueryParams;
    security: PatientCommunicationsUpdateSecurity;
}
export declare class PatientCommunicationsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
