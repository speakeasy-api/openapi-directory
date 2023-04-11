import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EinVerificationComprehensiveSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class EinVerificationComprehensiveRequest extends SpeakeasyBase {
    /**
     * Nine letter EIN number with or without hyphens
     */
    ein: string;
}
/**
 * Detailed information about the error
 */
export declare class EinVerificationComprehensiveDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Result of a comprehensive EIN number verification
 */
export declare class EinVerificationComprehensive200ApplicationJSON extends SpeakeasyBase {
    ein: string;
    matchedEinCompanies: shared.Oneapi1v11einVerification1lookupGetResponses200ContentApplication1jsonSchemaPropertiesMatchedEinCompanies[];
    timestamp: number;
    validationStatus: boolean;
}
export declare class EinVerificationComprehensiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Result of a comprehensive EIN number verification
     */
    einVerificationComprehensive200ApplicationJSONObject?: EinVerificationComprehensive200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    einVerificationComprehensiveDefaultApplicationJSONObject?: EinVerificationComprehensiveDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
