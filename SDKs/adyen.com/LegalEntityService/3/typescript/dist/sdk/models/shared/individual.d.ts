import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BirthData } from "./birthdata";
import { IdentificationData } from "./identificationdata";
import { Name } from "./name";
import { PhoneNumber } from "./phonenumber";
import { TaxInformation } from "./taxinformation";
import { WebData, WebDataInput } from "./webdata";
export declare class IndividualInput extends SpeakeasyBase {
    birthData?: BirthData;
    /**
     * The email address of the legal entity.
     */
    email?: string;
    identificationData?: IdentificationData;
    name: Name;
    /**
     * The individual's nationality.
     */
    nationality?: string;
    phone?: PhoneNumber;
    residentialAddress: Address;
    /**
     * The tax information of the individual.
     */
    taxInformation?: TaxInformation[];
    webData?: WebDataInput;
}
export declare class Individual extends SpeakeasyBase {
    birthData?: BirthData;
    /**
     * The email address of the legal entity.
     */
    email?: string;
    identificationData?: IdentificationData;
    name: Name;
    /**
     * The individual's nationality.
     */
    nationality?: string;
    phone?: PhoneNumber;
    residentialAddress: Address;
    /**
     * The tax information of the individual.
     */
    taxInformation?: TaxInformation[];
    webData?: WebData;
}
