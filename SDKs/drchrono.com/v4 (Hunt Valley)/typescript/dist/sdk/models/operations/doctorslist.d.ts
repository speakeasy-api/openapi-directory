import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoctorsListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
export declare class DoctorsListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class DoctorsList200ApplicationJson extends SpeakeasyBase {
    data?: shared.Doctor[];
    next?: string;
    previous?: string;
}
export declare class DoctorsListRequest extends SpeakeasyBase {
    queryParams: DoctorsListQueryParams;
    security: DoctorsListSecurity;
}
export declare class DoctorsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    doctorsList200ApplicationJSONObject?: DoctorsList200ApplicationJson;
}
