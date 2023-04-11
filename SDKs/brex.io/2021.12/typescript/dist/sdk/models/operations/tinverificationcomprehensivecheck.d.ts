import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TinVerificationComprehensiveCheckSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class TinVerificationComprehensiveCheckRequest extends SpeakeasyBase {
    /**
     * Company Name
     */
    name: string;
    /**
     * The percentage of minimum similarity threshold for company matching (optional, default: 70%)
     */
    threshold?: number;
    /**
     * Nine letter TIN number with or without hyphens
     */
    tin: string;
}
/**
 * Detailed information about the error
 */
export declare class TinVerificationComprehensiveCheckDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Result of a basic TIN number check with company name and the list of matched companies
 */
export declare class TinVerificationComprehensiveCheck200ApplicationJSON extends SpeakeasyBase {
    einResult: string;
    matchedCompanies: shared.Oneapi1v11company1search1name1Percent7BcountryPercent7D1Percent7BnamePercent7DGetResponses200ContentApplication1jsonSchema[];
    tinResult: string;
}
export declare class TinVerificationComprehensiveCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Result of a basic TIN number check with company name and the list of matched companies
     */
    tinVerificationComprehensiveCheck200ApplicationJSONObject?: TinVerificationComprehensiveCheck200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    tinVerificationComprehensiveCheckDefaultApplicationJSONObject?: TinVerificationComprehensiveCheckDefaultApplicationJSON;
}
