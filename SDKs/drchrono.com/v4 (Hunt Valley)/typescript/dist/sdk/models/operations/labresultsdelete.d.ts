import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabResultsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class LabResultsDeleteQueryParams extends SpeakeasyBase {
    doctor?: number;
    order?: number;
}
export declare class LabResultsDeleteSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
export declare class LabResultsDeleteRequest extends SpeakeasyBase {
    pathParams: LabResultsDeletePathParams;
    queryParams: LabResultsDeleteQueryParams;
    security: LabResultsDeleteSecurity;
}
export declare class LabResultsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
