import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class NifBasicSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Company details
 */
export declare class NifBasicRequestBody extends SpeakeasyBase {
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
export declare class NifBasicRequest extends SpeakeasyBase {
    /**
     * Company details
     */
    requestBody: NifBasicRequestBody;
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
}
/**
 * Detailed information about the error
 */
export declare class NifBasicDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Result of a basic NIF verification
 */
export declare class NifBasic200ApplicationJSON extends SpeakeasyBase {
    companyName?: string;
    confidenceScore: number;
    nifNumber: number;
    validationStatus: boolean;
}
export declare class NifBasicResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Result of a basic NIF verification
     */
    nifBasic200ApplicationJSONObject?: NifBasic200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    nifBasicDefaultApplicationJSONObject?: NifBasicDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
