import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EinVerificationLookupSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class EinVerificationLookupRequest extends SpeakeasyBase {
    /**
     * Business name of the company
     */
    name: string;
    /**
     * Optional state parameter to improve results. (Two letter code for example CA or US-CA for California)
     */
    state?: string;
    /**
     * Optional parameter to do tight matching. (Only the best match will be returned rather then the top 5)
     */
    tight?: boolean;
    /**
     * Optional zip code parameter to improve results. (Zip is preferred over state)
     */
    zip?: string;
}
/**
 * Detailed information about the error
 */
export declare class EinVerificationLookupDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class EinVerificationLookup200ApplicationJSONMatchedEinCompanies extends SpeakeasyBase {
    address?: string[];
    companyScore?: number;
    companyScoreExplanation?: string;
    confidenceScore?: number;
    confidenceScoreExplanation?: string;
    dbaScore?: string;
    dbaScoreExplanation?: string;
    ein?: string;
    formattedAddress?: string[];
    irsScore?: string;
    irsScoreExplanation?: string;
    name?: string;
    providedStatus?: string;
    providedStatusExplanation?: string;
}
/**
 * Result of a EIN reverse lookup
 */
export declare class EinVerificationLookup200ApplicationJSON extends SpeakeasyBase {
    matchedEinCompanies?: EinVerificationLookup200ApplicationJSONMatchedEinCompanies[];
    searchtermName: string;
    searchtermState: string;
    searchtermZip: string;
    tightSearch: boolean;
    timestamp: number;
}
export declare class EinVerificationLookupResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Result of a EIN reverse lookup
     */
    einVerificationLookup200ApplicationJSONObject?: EinVerificationLookup200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    einVerificationLookupDefaultApplicationJSONObject?: EinVerificationLookupDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
