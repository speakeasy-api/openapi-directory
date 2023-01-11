import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConsentFormsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class ConsentFormsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ConsentFormsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.ConsentForm[];
    next?: string;
    previous?: string;
}
export declare class ConsentFormsListRequest extends SpeakeasyBase {
    queryParams: ConsentFormsListQueryParams;
    security: ConsentFormsListSecurity;
}
export declare class ConsentFormsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    consentFormsList200ApplicationJSONObject?: ConsentFormsList200ApplicationJson;
}
