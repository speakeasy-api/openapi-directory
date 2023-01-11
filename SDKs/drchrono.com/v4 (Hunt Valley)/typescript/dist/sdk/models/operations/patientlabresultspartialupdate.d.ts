import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientLabResultsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientLabResultsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientLabResultsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: PatientLabResultsPartialUpdatePathParams;
    queryParams: PatientLabResultsPartialUpdateQueryParams;
    security: PatientLabResultsPartialUpdateSecurity;
}
export declare class PatientLabResultsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
