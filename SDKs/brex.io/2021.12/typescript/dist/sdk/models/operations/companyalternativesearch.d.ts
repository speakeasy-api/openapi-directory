import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyAlternativeSearchSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * VAT number and the company details
 */
export declare class CompanyAlternativeSearchRequestBody extends SpeakeasyBase {
    /**
     * Company address (or address partial)
     */
    address?: string;
    /**
     * Company name
     */
    name?: string;
    /**
     * Company registration number
     */
    number?: string;
    /**
     * Company contact phone number
     */
    phone?: string;
    /**
     * Company url
     */
    url?: string;
    /**
     * Company VAT number
     */
    vat?: string;
}
export declare class CompanyAlternativeSearchRequest extends SpeakeasyBase {
    /**
     * VAT number and the company details
     */
    requestBody?: CompanyAlternativeSearchRequestBody;
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyAlternativeSearchDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyAlternativeSearch200ApplicationJSON extends SpeakeasyBase {
    address?: string[];
    country?: string;
    dateOfIncorporation?: string;
    extraData?: Record<string, any>;
    formattedAddress?: string[];
    id?: string;
    legalForm?: string;
    managingDirectors?: string[];
    name?: string;
    registrationNumber?: string;
    requestTime?: number;
    secretaries?: string[];
    sicNaceCodes?: string[];
    status?: string;
}
export declare class CompanyAlternativeSearchResponse extends SpeakeasyBase {
    /**
     * List of companies
     */
    companyAlternativeSearch200ApplicationJSONObjects?: CompanyAlternativeSearch200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyAlternativeSearchDefaultApplicationJSONObject?: CompanyAlternativeSearchDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
