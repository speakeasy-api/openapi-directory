import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImplantableDevicesListQueryParams extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    muDate?: string;
    muDateRange?: string;
    pageSize?: number;
    patient?: number;
}
export declare class ImplantableDevicesListSecurity extends SpeakeasyBase {
    drchronoOauth2: shared.SchemeDrchronoOauth2;
}
/**
 * Paginated Result
**/
export declare class ImplantableDevicesList200ApplicationJson extends SpeakeasyBase {
    data?: shared.ImplantableDevice[];
    next?: string;
    previous?: string;
}
export declare class ImplantableDevicesListRequest extends SpeakeasyBase {
    queryParams: ImplantableDevicesListQueryParams;
    security: ImplantableDevicesListSecurity;
}
export declare class ImplantableDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    implantableDevicesList200ApplicationJSONObject?: ImplantableDevicesList200ApplicationJson;
}
