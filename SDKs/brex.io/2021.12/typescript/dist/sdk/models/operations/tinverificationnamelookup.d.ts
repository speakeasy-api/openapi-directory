import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TinVerificationNameLookupSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class TinVerificationNameLookupRequest extends SpeakeasyBase {
    /**
     * Nine letter TIN number with or without hyphens
     */
    tin: string;
}
/**
 * Detailed information about the error
 */
export declare class TinVerificationNameLookupDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Result of a EIN name lookup with TIN number
 */
export declare class TinVerificationNameLookup200ApplicationJSON extends SpeakeasyBase {
    matchStatus: string;
    possibleMatch: string;
    tin: string;
}
export declare class TinVerificationNameLookupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Result of a EIN name lookup with TIN number
     */
    tinVerificationNameLookup200ApplicationJSONObject?: TinVerificationNameLookup200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    tinVerificationNameLookupDefaultApplicationJSONObject?: TinVerificationNameLookupDefaultApplicationJSON;
}
