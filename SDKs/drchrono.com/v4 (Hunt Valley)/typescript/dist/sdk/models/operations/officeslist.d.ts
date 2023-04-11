import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OfficesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class OfficesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class OfficesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.Office[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class OfficesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    officesList200ApplicationJSONObject?: OfficesList200ApplicationJSON;
}
