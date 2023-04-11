import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
import { BankAccount } from "./bankaccount";
import { Card } from "./card";
import { Elv } from "./elv";
import { Name } from "./name";
import { TokenDetails } from "./tokendetails";
export declare class RecurringDetail extends SpeakeasyBase {
    acquirer?: string;
    acquirerAccount?: string;
    additionalData?: Record<string, string>;
    alias?: string;
    aliasType?: string;
    bank?: BankAccount;
    billingAddress?: Address;
    card?: Card;
    contractTypes?: string[];
    creationDate?: Date;
    elv?: Elv;
    firstPspReference?: string;
    /**
     * An optional descriptive name for this recurring detail
     */
    name?: string;
    paymentMethodVariant?: string;
    /**
     * The reference that uniquely identifies the recurring detail
     */
    recurringDetailReference?: string;
    shopperName?: Name;
    socialSecurityNumber?: string;
    tokenDetails?: TokenDetails;
    variant?: string;
}
