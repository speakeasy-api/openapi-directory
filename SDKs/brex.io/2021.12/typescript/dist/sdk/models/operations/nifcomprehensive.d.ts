import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NifComprehensiveSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Company details
 */
export declare class NifComprehensiveRequestBody extends SpeakeasyBase {
    /**
     * company address lines
     */
    companyAddress?: string;
    /**
     * Company name
     */
    companyName?: string;
    /**
     * NIF number to validate
     */
    nifNumber: string;
}
export declare class NifComprehensiveRequest extends SpeakeasyBase {
    /**
     * Company details
     */
    requestBody: NifComprehensiveRequestBody;
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
}
/**
 * Detailed information about the error
 */
export declare class NifComprehensiveDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Result of a comprehensive NIF verification
 */
export declare class NifComprehensive200ApplicationJSON extends SpeakeasyBase {
    activity?: Record<string, any>;
    address?: string;
    capital?: number;
    companyName?: string;
    confidenceScore: number;
    currency?: string;
    email?: string;
    fax?: string;
    geo?: string;
    legalType?: string;
    nifNumber: number;
    phone?: string;
    status?: Record<string, any>;
    validationStatus: boolean;
    website?: string;
}
export declare class NifComprehensiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Result of a comprehensive NIF verification
     */
    nifComprehensive200ApplicationJSONObject?: NifComprehensive200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    nifComprehensiveDefaultApplicationJSONObject?: NifComprehensiveDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
