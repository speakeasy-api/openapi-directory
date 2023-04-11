import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { Card } from "./card";
import { Name } from "./name";
export declare class FundSource extends SpeakeasyBase {
    /**
     * A map of name-value pairs for passing additional or industry-specific data.
     */
    additionalData?: Record<string, string>;
    billingAddress?: Address;
    card?: Card;
    /**
     * Email address of the person.
     */
    shopperEmail?: string;
    shopperName?: Name;
    /**
     * Phone number of the person
     */
    telephoneNumber?: string;
}
