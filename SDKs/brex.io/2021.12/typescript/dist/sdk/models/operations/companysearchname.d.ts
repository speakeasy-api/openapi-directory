import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanySearchNameSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanySearchNameRequest extends SpeakeasyBase {
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
    /**
     * number of search results
     */
    limit?: number;
    /**
     * company name
     */
    name: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanySearchNameDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanySearchName200ApplicationJSON extends SpeakeasyBase {
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
export declare class CompanySearchNameResponse extends SpeakeasyBase {
    /**
     * List of companies
     */
    companySearchName200ApplicationJSONObjects?: CompanySearchName200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companySearchNameDefaultApplicationJSONObject?: CompanySearchNameDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
