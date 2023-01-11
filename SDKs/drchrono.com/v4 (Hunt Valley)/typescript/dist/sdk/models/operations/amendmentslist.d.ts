import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AmendmentsListQueryParams extends SpeakeasyBase {
    appointment?: number;
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
}
export declare class AmendmentsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class AmendmentsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.PatientAmendment[];
    next?: string;
    previous?: string;
}
export declare class AmendmentsListRequest extends SpeakeasyBase {
    queryParams: AmendmentsListQueryParams;
    security: AmendmentsListSecurity;
}
export declare class AmendmentsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    amendmentsList200ApplicationJSONObject?: AmendmentsList200ApplicationJson;
}
