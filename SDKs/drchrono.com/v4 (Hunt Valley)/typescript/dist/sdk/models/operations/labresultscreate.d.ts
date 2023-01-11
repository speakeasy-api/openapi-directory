import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabResultsCreateQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabResultsCreateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabResultsCreateRequest extends SpeakeasyBase {
    queryParams: LabResultsCreateQueryParams;
    security: LabResultsCreateSecurity;
}
export declare class LabResultsCreateResponse extends SpeakeasyBase {
    contentType: string;
    labResult?: shared.LabResult;
    statusCode: number;
}
