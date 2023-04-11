import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EinVerificationBasicSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class EinVerificationBasicRequest extends SpeakeasyBase {
    /**
     * Nine letter EIN number with or without hyphens
     */
    ein: string;
}
/**
 * Detailed information about the error
 */
export declare class EinVerificationBasicDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Result of a basic EIN number verification
 */
export declare class EinVerificationBasic200ApplicationJSON extends SpeakeasyBase {
    confidenceScore: string;
    confidenceScoreExplanation: string;
    dbaScore: string;
    dbaScoreExplanation: string;
    ein: string;
    irsScore: string;
    irsScoreExplanation: string;
    timestamp: number;
    validationStatus: boolean;
}
export declare class EinVerificationBasicResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Result of a basic EIN number verification
     */
    einVerificationBasic200ApplicationJSONObject?: EinVerificationBasic200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    einVerificationBasicDefaultApplicationJSONObject?: EinVerificationBasicDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
