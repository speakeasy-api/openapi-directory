import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProblemsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class ProblemsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ProblemsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientProblem[];
    next?: string;
    previous?: string;
}
export declare class ProblemsListRequest extends SpeakeasyBase {
    queryParams: ProblemsListQueryParams;
    security: ProblemsListSecurity;
}
export declare class ProblemsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    problemsList200ApplicationJSONObject?: ProblemsList200ApplicationJson;
}
