import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanySearchNumberSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanySearchNumberRequest extends SpeakeasyBase {
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
    /**
     * number of search results
     */
    limit?: number;
    /**
     * company registration number
     */
    number: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanySearchNumberDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanySearchNumber200ApplicationJSON extends SpeakeasyBase {
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
export declare class CompanySearchNumberResponse extends SpeakeasyBase {
    /**
     * List of companies
     */
    companySearchNumber200ApplicationJSONObjects?: CompanySearchNumber200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companySearchNumberDefaultApplicationJSONObject?: CompanySearchNumberDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
