import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyIdSuperSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Optional data translation (only available in limited jurisdictions)
 */
export declare enum CompanyIdSuperLangEnum {
    Unknown = "",
    Og = "OG",
    En = "EN"
}
export declare class CompanyIdSuperRequest extends SpeakeasyBase {
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
    /**
     * company superdata by id
     */
    id: string;
    /**
     * Optional data translation (only available in limited jurisdictions)
     */
    lang?: CompanyIdSuperLangEnum;
}
/**
 * Detailed information about the error
 */
export declare class CompanyIdSuperDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyIdSuper200ApplicationJSON extends SpeakeasyBase {
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
export declare class CompanyIdSuperResponse extends SpeakeasyBase {
    /**
     * List of companies
     */
    companyIdSuper200ApplicationJSONObjects?: CompanyIdSuper200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyIdSuperDefaultApplicationJSONObject?: CompanyIdSuperDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
