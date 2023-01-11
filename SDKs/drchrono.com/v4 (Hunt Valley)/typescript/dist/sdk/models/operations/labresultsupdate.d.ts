import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabResultsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabResultsUpdateQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabResultsUpdateSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabResultsUpdateRequest extends SpeakeasyBase {
    pathParams: LabResultsUpdatePathParams;
    queryParams: LabResultsUpdateQueryParams;
    security: LabResultsUpdateSecurity;
}
export declare class LabResultsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
