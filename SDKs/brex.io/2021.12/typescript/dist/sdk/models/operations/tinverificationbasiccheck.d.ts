import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TinVerificationBasicCheckSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class TinVerificationBasicCheckRequest extends SpeakeasyBase {
    /**
     * Company Name
     */
    name: string;
    /**
     * Nine letter TIN number with or without hyphens
     */
    tin: string;
}
/**
 * Detailed information about the error
 */
export declare class TinVerificationBasicCheckDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Result of a basic TIN number check with company name
 */
export declare class TinVerificationBasicCheck200ApplicationJSON extends SpeakeasyBase {
    matchStatus: string;
    name: string;
    possibleMatch: string;
    tin: string;
    validationStatus: string;
}
export declare class TinVerificationBasicCheckResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Result of a basic TIN number check with company name
     */
    tinVerificationBasicCheck200ApplicationJSONObject?: TinVerificationBasicCheck200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    tinVerificationBasicCheckDefaultApplicationJSONObject?: TinVerificationBasicCheckDefaultApplicationJSON;
}
