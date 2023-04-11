import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Phone } from "./phone";
export declare class ContactDetails extends SpeakeasyBase {
    address: Address;
    /**
     * The email address of the account holder.
     */
    email: string;
    phone: Phone;
    /**
     * The URL of the account holder's website.
     */
    webAddress?: string;
}
