import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CompanyDeepsearchLEISecurity extends SpeakeasyBase {
    userKey: string;
}
export declare class CompanyDeepsearchLEIRequest extends SpeakeasyBase {
    /**
     * lei number
     */
    number: string;
    /**
     * Pagination for the ISIN number results (1000 numbers per page)
     */
    page?: number;
}
/**
 * Detailed information about the error
 */
export declare class CompanyDeepsearchLEIDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
export declare class CompanyDeepsearchLei200ApplicationJSONCompany extends SpeakeasyBase {
    address?: string[];
    country: string;
    dateOfIncorporation?: string;
    extraData?: Record<string, any>;
    formattedAddress?: string[];
    id: string;
    legalForm?: string;
    managingDirectors?: string[];
    name: string;
    registrationNumber: string;
    requestTime?: number;
    secretaries?: string[];
    sicNaceCodes?: string[];
    status?: string;
}
/**
 * Result of a lookup by LEI number
 */
export declare class CompanyDeepsearchLei200ApplicationJSON extends SpeakeasyBase {
    company?: CompanyDeepsearchLei200ApplicationJSONCompany;
    currentPage?: number;
    isins?: string[];
    lastPage?: number;
    lei?: string;
    nextPage?: string;
    totalNumIsins?: number;
    validLei?: boolean;
}
export declare class CompanyDeepsearchLEIResponse extends SpeakeasyBase {
    /**
     * Result of a lookup by LEI number
     */
    companyDeepsearchLEI200ApplicationJSONObject?: CompanyDeepsearchLei200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    companyDeepsearchLEIDefaultApplicationJSONObject?: CompanyDeepsearchLEIDefaultApplicationJSON;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
