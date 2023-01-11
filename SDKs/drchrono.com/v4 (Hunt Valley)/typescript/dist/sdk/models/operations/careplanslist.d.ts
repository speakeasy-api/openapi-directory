import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CarePlansListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
    patient?: number;
    planType?: number;
}
export declare class CarePlansListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class CarePlansList200ApplicationJson extends SpeakeasyBase {
    data?: shared.CarePlan[];
    next?: string;
    previous?: string;
}
export declare class CarePlansListRequest extends SpeakeasyBase {
    queryParams: CarePlansListQueryParams;
    security: CarePlansListSecurity;
}
export declare class CarePlansListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    carePlansList200ApplicationJSONObject?: CarePlansList200ApplicationJson;
}
