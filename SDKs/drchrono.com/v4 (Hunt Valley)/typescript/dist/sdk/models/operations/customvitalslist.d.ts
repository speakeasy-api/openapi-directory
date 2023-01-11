import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomVitalsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class CustomVitalsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class CustomVitalsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomVitalType[];
    next?: string;
    previous?: string;
}
export declare class CustomVitalsListRequest extends SpeakeasyBase {
    queryParams: CustomVitalsListQueryParams;
    security: CustomVitalsListSecurity;
}
export declare class CustomVitalsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    customVitalsList200ApplicationJSONObject?: CustomVitalsList200ApplicationJson;
}
