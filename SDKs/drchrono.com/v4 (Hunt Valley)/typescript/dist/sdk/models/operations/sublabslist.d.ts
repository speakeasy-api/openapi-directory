import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SublabsListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class SublabsListRequest extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class SublabsList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.LabVendorLocation[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class SublabsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    sublabsList200ApplicationJSONObject?: SublabsList200ApplicationJSON;
}
