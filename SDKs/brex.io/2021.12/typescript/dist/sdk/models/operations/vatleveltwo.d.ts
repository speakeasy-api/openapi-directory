import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class VatLevelTwoSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * VAT number and confirmation request
 */
export declare class VatLevelTwoRequestBody extends SpeakeasyBase {
    /**
     * If a confirmation document should be ordered
     */
    confirmation?: boolean;
    /**
     * VAT number to validate
     */
    vatNumber: string;
}
export declare class VatLevelTwoRequest extends SpeakeasyBase {
    /**
     * VAT number and confirmation request
     */
    requestBody: VatLevelTwoRequestBody;
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
}
/**
 * Detailed information about the error
 */
export declare class VatLevelTwoDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Denotes second level validity result of checked VAT
 */
export declare class VatLevelTwo200ApplicationJSON extends SpeakeasyBase {
    address?: string;
    confirmation?: string;
    level: string;
    name?: string;
    validationStatus: boolean;
}
export declare class VatLevelTwoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Denotes second level validity result of checked VAT
     */
    vatLevelTwo200ApplicationJSONObject?: VatLevelTwo200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    vatLevelTwoDefaultApplicationJSONObject?: VatLevelTwoDefaultApplicationJSON;
}
