import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetShippingLabelInput extends SpeakeasyBase {
    /**
     * Specifies the version of the client tool.
     */
    apiVersion?: string;
    /**
     * Specifies the name of your city for the return address.
     */
    city?: string;
    /**
     * Specifies the name of the company that will ship this package.
     */
    company?: string;
    /**
     * Specifies the name of your country for the return address.
     */
    country?: string;
    jobIds: string[];
    /**
     * Specifies the name of the person responsible for shipping this package.
     */
    name?: string;
    /**
     * Specifies the phone number of the person responsible for shipping this package.
     */
    phoneNumber?: string;
    /**
     * Specifies the postal code for the return address.
     */
    postalCode?: string;
    /**
     * Specifies the name of your state or your province for the return address.
     */
    stateOrProvince?: string;
    /**
     * Specifies the first part of the street address for the return address, for example 1234 Main Street.
     */
    street1?: string;
    /**
     * Specifies the optional second part of the street address for the return address, for example Suite 100.
     */
    street2?: string;
    /**
     * Specifies the optional third part of the street address for the return address, for example c/o Jane Doe.
     */
    street3?: string;
}
