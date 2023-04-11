import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class InsurancesListSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class InsurancesListRequest extends SpeakeasyBase {
    cursor?: string;
    pageSize?: number;
    /**
     * One of `"emdeon"`, `"gateway"`, `"ihcfa"`
     */
    payerType: string;
    /**
     * Search term, which can be either a partial name, partial ID or the state.
     */
    term?: string;
}
/**
 * Paginated Result
 */
export declare class InsurancesList200ApplicationJSON extends SpeakeasyBase {
    /**
     * result data
     */
    data?: shared.Insurance[];
    /**
     * Next Paginated page
     */
    next?: string;
    /**
     * Previous paginated page
     */
    previous?: string;
}
export declare class InsurancesListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    insurancesList200ApplicationJSONObject?: InsurancesList200ApplicationJSON;
}
