import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImplantableDevicesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class ImplantableDevicesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    muDate?: string;
    muDateRange?: string;
    pageSize?: number;
    patient?: number;
}
/**
 * Paginated Result
 */
export declare class ImplantableDevicesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.ImplantableDevice[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class ImplantableDevicesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    implantableDevicesList200ApplicationJSONObject?: ImplantableDevicesList200ApplicationJSON;
}
