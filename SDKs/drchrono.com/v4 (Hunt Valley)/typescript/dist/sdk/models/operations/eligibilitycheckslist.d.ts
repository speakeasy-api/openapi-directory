import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EligibilityChecksListQueryParams extends SpeakeasyBase {
    appointment?: number;
    appointmentDate?: string;
    appointmentDateRange?: string;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    queryDate?: string;
    queryDateRange?: string;
}
export declare class EligibilityChecksListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class EligibilityChecksList200ApplicationJson extends SpeakeasyBase {
    data?: shared.Coverage[];
    next?: string;
    previous?: string;
}
export declare class EligibilityChecksListRequest extends SpeakeasyBase {
    queryParams: EligibilityChecksListQueryParams;
    security: EligibilityChecksListSecurity;
}
export declare class EligibilityChecksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    eligibilityChecksList200ApplicationJSONObject?: EligibilityChecksList200ApplicationJson;
}
