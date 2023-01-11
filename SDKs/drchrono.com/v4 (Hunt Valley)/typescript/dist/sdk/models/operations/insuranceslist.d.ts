import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InsurancesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
    payerType: string;
    term?: string;
}
export declare class InsurancesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class InsurancesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.Insurance[];
    next?: string;
    previous?: string;
}
export declare class InsurancesListRequest extends SpeakeasyBase {
    queryParams: InsurancesListQueryParams;
    security: InsurancesListSecurity;
}
export declare class InsurancesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    insurancesList200ApplicationJSONObject?: InsurancesList200ApplicationJson;
}
