import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PepOrderSecurity extends SpeakeasyBase {
    userKey: string;
}
/**
 * Optional parameters to enhance search
 */
export declare class PepOrderRequestBody extends SpeakeasyBase {
    /**
     * Optional parameter for declaring alias names when doing a person search (seperated by commas)
     */
    aliases?: string;
    /**
     * Optional name of Country to assist in identifying matches based upon location/geography.
     */
    country?: string;
    /**
     * Optional parameter for date of birth name when doing a person search
     */
    dob?: string;
    /**
     * Optional parameter for last name when doing a person search
     */
    familyName?: string;
    /**
     * Optional parameter for restricting search when doing a person search (seperated by commas)
     */
    filters?: string;
    /**
     * Optional parameter for first name when doing a person search
     */
    givenName?: string;
    /**
     * Optional Legal Entity Identifier for additional business identifier verification.
     */
    lei?: string;
    /**
     * Optional name of City or Locale to assist in identifying matches based upon location/geography.
     */
    locale?: string;
    /**
     * Optional parameter for selecting only specific media lists. By default all lists are queried
     */
    medialists?: string;
    /**
     * Optional parameter for middle name when doing a person search
     */
    middleName?: string;
    /**
     * If this Pep Sanction Check should be continuesly monitored.
     */
    monitoring?: boolean;
    /**
     * Optional parameter for selecting only specific pep lists. By default all lists are queried
     */
    peplists?: string;
    /**
     * Optional name of Region or State to assist in identifying matches based upon location/geography.
     */
    region?: string;
    /**
     * Optional parameter for enabling SmartMatch to retrieve more results
     */
    smartMatch?: boolean;
    /**
     * Optional parameter for selecting only specific watch lists. By default all lists are queried
     */
    watchlists?: string;
    /**
     * If Monitoring is enabled this parameter is required. This is where updates will be sent to
     */
    webhook?: string;
}
/**
 * Type (Business or Person) of the requested Pep Sanction Check
 */
export declare enum PepOrderTypeEnum {
    Unknown = "",
    B = "B",
    P = "P"
}
export declare class PepOrderRequest extends SpeakeasyBase {
    /**
     * Optional parameters to enhance search
     */
    requestBody?: PepOrderRequestBody;
    /**
     * Search string for the Pep Sanction Check
     */
    search: string;
    /**
     * Type (Business or Person) of the requested Pep Sanction Check
     */
    type: PepOrderTypeEnum;
}
/**
 * Detailed information about the error
 */
export declare class PepOrderDefaultApplicationJSON extends SpeakeasyBase {
    code: number;
    fault?: string;
    message: string;
    tag: string;
}
/**
 * Product details
 */
export declare class PepOrder200ApplicationJSON extends SpeakeasyBase {
    availability: string;
    category: string;
    countryCode: string;
    description: string;
    hasOptions: boolean;
    options: string[];
    price: number;
    provider: string;
    sku: string;
    type: string;
}
export declare class PepOrderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product details
     */
    pepOrder200ApplicationJSONObject?: PepOrder200ApplicationJSON;
    /**
     * Detailed information about the error
     */
    pepOrderDefaultApplicationJSONObject?: PepOrderDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
