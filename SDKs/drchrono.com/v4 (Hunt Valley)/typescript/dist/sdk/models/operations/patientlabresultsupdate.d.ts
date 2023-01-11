import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatientLabResultsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatientLabResultsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    orderingDoctor?: number;
    patient?: number;
    since?: string;
}
export declare class PatientLabResultsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class PatientLabResultsUpdateRequest extends SpeakeasyBase {
    pathParams: PatientLabResultsUpdatePathParams;
    queryParams: PatientLabResultsUpdateQueryParams;
    security: PatientLabResultsUpdateSecurity;
}
export declare class PatientLabResultsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
