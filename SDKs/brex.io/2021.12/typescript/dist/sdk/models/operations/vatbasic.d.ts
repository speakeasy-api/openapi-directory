import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VatBasicSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * VAT number and the company details
 */
export declare class VatBasicRequestBody extends SpeakeasyBase {
    /**
     * company address lines
     */
    companyAddress?: string;
    /**
     * Company name
     */
    companyName?: string;
    /**
     * official company number
     */
    companyNumber?: string;
    /**
     * VAT number to validate
     */
    vatNumber: string;
}
export declare class VatBasicRequest extends SpeakeasyBase {
    /**
     * VAT number and the company details
     */
    requestBody: VatBasicRequestBody;
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
}
/**
 * Detailed information about the error
 */
export declare class VatBasicDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Denotes validity of checked VAT
 */
export declare class VatBasic200ApplicationJSON extends SpeakeasyBase {
    candidate?: shared.Oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany[];
    company?: shared.Oneapi1v11company1deepsearch1lei1Percent7BnumberPercent7DGetResponses200ContentApplication1jsonSchemaPropertiesCompany;
    confidenceScore: number;
    validationStatus: boolean;
}
export declare class VatBasicResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Denotes validity of checked VAT
     */
    vatBasic200ApplicationJSONObject?: VatBasic200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    vatBasicDefaultApplicationJSONObject?: VatBasicDefaultApplicationJSON;
}
