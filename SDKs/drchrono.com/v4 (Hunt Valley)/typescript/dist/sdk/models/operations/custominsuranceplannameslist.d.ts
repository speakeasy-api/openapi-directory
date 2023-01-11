import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomInsurancePlanNamesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    name?: string;
    pageSize?: number;
    since?: string;
    user?: number;
}
export declare class CustomInsurancePlanNamesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class CustomInsurancePlanNamesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomInsurancePlanName[];
    next?: string;
    previous?: string;
}
export declare class CustomInsurancePlanNamesListRequest extends SpeakeasyBase {
    queryParams: CustomInsurancePlanNamesListQueryParams;
    security: CustomInsurancePlanNamesListSecurity;
}
export declare class CustomInsurancePlanNamesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    customInsurancePlanNamesList200ApplicationJSONObject?: CustomInsurancePlanNamesList200ApplicationJson;
}
