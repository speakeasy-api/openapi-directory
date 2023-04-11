import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyDeepsearchISINSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * ISIN bulk deepsearch parameters
 */
export declare class CompanyDeepsearchISINRequestBody extends SpeakeasyBase {
    /**
     * A list of ISIN numbers seperated by comma (maximum) is 100
     */
    isin?: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyDeepsearchISINDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyDeepsearchIsin200ApplicationJSONListings extends SpeakeasyBase {
    additionalSecurityType?: string;
    exchCode?: string;
    identifier?: string;
    marketSector?: string;
    name?: string;
    securityDescription?: string;
    securityType?: string;
    shareClassId?: string;
    stockId?: string;
    symbol?: string;
}
export declare class CompanyDeepsearchIsin200ApplicationJSON extends SpeakeasyBase {
    isin?: string;
    listings?: CompanyDeepsearchIsin200ApplicationJSONListings[];
    validIsin?: boolean;
}
export declare class CompanyDeepsearchISINResponse extends SpeakeasyBase {
    /**
     * Result of a lookup by ISIN number
     */
    companyDeepsearchISIN200ApplicationJSONObjects?: CompanyDeepsearchIsin200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyDeepsearchISINDefaultApplicationJSONObject?: CompanyDeepsearchISINDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
