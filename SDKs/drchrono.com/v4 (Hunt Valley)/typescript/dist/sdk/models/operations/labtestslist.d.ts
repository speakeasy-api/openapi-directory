import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LabTestsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    order?: number;
    pageSize?: number;
}
export declare class LabTestsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class LabTestsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.LabTest[];
    next?: string;
    previous?: string;
}
export declare class LabTestsListRequest extends SpeakeasyBase {
    queryParams: LabTestsListQueryParams;
    security: LabTestsListSecurity;
}
export declare class LabTestsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    labTestsList200ApplicationJSONObject?: LabTestsList200ApplicationJson;
}
