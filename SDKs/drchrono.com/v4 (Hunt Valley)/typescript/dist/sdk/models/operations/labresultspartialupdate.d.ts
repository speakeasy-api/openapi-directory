import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabResultsPartialUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabResultsPartialUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabResultsPartialUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabResultsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: LabResultsPartialUpdatePathParams;
    queryParams: LabResultsPartialUpdateQueryParams;
    security: LabResultsPartialUpdateSecurity;
}
export declare class LabResultsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
