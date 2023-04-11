import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IbanComprehensiveSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * IBAN number
 */
export declare class IbanComprehensiveRequestBody extends SpeakeasyBase {
    /**
     * IBAN number to validate
     */
    ibanNumber: string;
}
/**
 * Detailed information about the error
 */
export declare class IbanComprehensiveDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class IbanComprehensiveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Detailed information about the error
     */
    ibanComprehensiveDefaultApplicationJSONObject?: IbanComprehensiveDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Denotes validity of checked IBAN and provides comprehensive information
     */
    oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema?: shared.Oneapi1v11ibanVerification1checkIbanPostResponses200ContentApplication1jsonSchema;
}
