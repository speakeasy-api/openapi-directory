import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IbanBasicSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * IBAN number
 */
export declare class IbanBasicRequestBody extends SpeakeasyBase {
    /**
     * IBAN number to validate
     */
    ibanNumber: string;
}
/**
 * Detailed information about the error
 */
export declare class IbanBasicDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Denotes validity of checked IBAN
 */
export declare class IbanBasic200ApplicationJSON extends SpeakeasyBase {
    valid: boolean;
}
export declare class IbanBasicResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Denotes validity of checked IBAN
     */
    ibanBasic200ApplicationJSONObject?: IbanBasic200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    ibanBasicDefaultApplicationJSONObject?: IbanBasicDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
