import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Name } from "./name";
import { PersonalData } from "./personaldata";
import { PhoneNumber } from "./phonenumber";
export declare class Contact extends SpeakeasyBase {
    address?: Address;
    /**
     * The e-mail address of the contact.
     */
    email?: string;
    /**
     * The phone number of the contact provided as a single string.  It will be handled as a landline phone.
     *
     * @remarks
     * **Examples:** "0031 6 11 22 33 44", "+316/1122-3344", "(0031) 611223344"
     */
    fullPhoneNumber?: string;
    name?: Name;
    personalData?: PersonalData;
    phoneNumber?: PhoneNumber;
    /**
     * The URL of the website of the contact.
     */
    webAddress?: string;
}
