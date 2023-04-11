import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BillingProfilesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class BillingProfilesListRequest extends SpeakeasyBase {
    cursor?: string;
    doctor?: number;
    pageSize?: number;
}
/**
 * Paginated Result
 */
export declare class BillingProfilesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.BillingProfile[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class BillingProfilesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    billingProfilesList200ApplicationJSONObject?: BillingProfilesList200ApplicationJSON;
}
