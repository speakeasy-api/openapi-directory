import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabResultsReadPathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabResultsReadQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabResultsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabResultsReadRequest extends SpeakeasyBase {
    pathParams: LabResultsReadPathParams;
    queryParams: LabResultsReadQueryParams;
    security: LabResultsReadSecurity;
}
export declare class LabResultsReadResponse extends SpeakeasyBase {
    contentType: string;
    labResult?: shared.LabResult;
    statusCode: number;
}
