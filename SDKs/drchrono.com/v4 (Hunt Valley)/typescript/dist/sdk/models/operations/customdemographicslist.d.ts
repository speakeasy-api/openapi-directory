import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CustomDemographicsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class CustomDemographicsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class CustomDemographicsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.CustomPatientFieldType[];
    next?: string;
    previous?: string;
}
export declare class CustomDemographicsListRequest extends SpeakeasyBase {
    queryParams: CustomDemographicsListQueryParams;
    security: CustomDemographicsListSecurity;
}
export declare class CustomDemographicsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    customDemographicsList200ApplicationJSONObject?: CustomDemographicsList200ApplicationJson;
}
