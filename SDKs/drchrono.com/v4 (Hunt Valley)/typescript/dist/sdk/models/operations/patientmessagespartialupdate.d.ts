import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientMessagesPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientMessagesPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientMessagesPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientMessagesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientMessagesPartialUpdatePathParams;
    queryParams: PatientMessagesPartialUpdateQueryParams;
    security: PatientMessagesPartialUpdateSecurity;
}
export declare class PatientMessagesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
