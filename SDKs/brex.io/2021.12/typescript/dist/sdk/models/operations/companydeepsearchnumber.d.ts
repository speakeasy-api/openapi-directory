import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyDeepsearchNumberSecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyDeepsearchNumberRequest extends SpeakeasyBase {
    /**
     * ISO_3166-1_alpha-2 representation of a country name - 2 chars
     */
    country: string;
    /**
     * company registration number
     */
    number: string;
}
/**
 * Detailed information about the error
 */
export declare class CompanyDeepsearchNumberDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyDeepsearchNumber200ApplicationJSON extends SpeakeasyBase {
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
export declare class CompanyDeepsearchNumberResponse extends SpeakeasyBase {
    /**
     * List of companies
     */
    companyDeepsearchNumber200ApplicationJSONObjects?: CompanyDeepsearchNumber200ApplicationJSON[];
    /**
     * Detailed information about the error
     */
    companyDeepsearchNumberDefaultApplicationJSONObject?: CompanyDeepsearchNumberDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
