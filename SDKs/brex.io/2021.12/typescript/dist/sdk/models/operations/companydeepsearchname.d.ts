import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyDeepsearchNameSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyDeepsearchNameRequest extends SpeakeasyBase {
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
    /**
     * company name
     */
    name: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyDeepsearchNameDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyDeepsearchName200ApplicationJSON extends SpeakeasyBase {
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
export declare class CompanyDeepsearchNameResponse extends SpeakeasyBase {
    /**
     * List of companies
     */
    companyDeepsearchName200ApplicationJSONObjects?: CompanyDeepsearchName200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyDeepsearchNameDefaultApplicationJSONObject?: CompanyDeepsearchNameDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
