import { SpeakeasyBase } from "../../../internal/utils";
import { Address3 } from "./address3";
import { BirthData } from "./birthdata";
import { IdentificationData } from "./identificationdata";
import { Name3 } from "./name3";
import { PhoneNumber2 } from "./phonenumber2";
import { WebData, WebDataInput } from "./webdata";
export declare class IndividualInput extends SpeakeasyBase {
    birthData?: BirthData;
    /**
     * The email address of the legal entity.
     */
    email?: string;
    identificationData?: IdentificationData;
    name: Name3;
    /**
     * The individual's nationality.
     */
    nationality?: string;
    phone?: PhoneNumber2;
    residentialAddress: Address3;
    webData?: WebDataInput;
}
export declare class Individual extends SpeakeasyBase {
    birthData?: BirthData;
    /**
     * The email address of the legal entity.
     */
    email?: string;
    identificationData?: IdentificationData;
    name: Name3;
    /**
     * The individual's nationality.
     */
    nationality?: string;
    phone?: PhoneNumber2;
    residentialAddress: Address3;
    webData?: WebData;
}
