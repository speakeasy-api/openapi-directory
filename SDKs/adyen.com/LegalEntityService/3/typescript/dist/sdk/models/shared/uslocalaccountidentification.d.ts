import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The bank account type.
 *
 * @remarks
 *
 * Possible values: **checking** or **savings**. Defaults to **checking**.
 */
export declare enum USLocalAccountIdentificationAccountTypeEnum {
    Checking = "checking",
    Savings = "savings"
}
/**
 * **usLocal**
 */
export declare enum USLocalAccountIdentificationTypeEnum {
    UsLocal = "usLocal"
}
/**
 * Identification of the bank account.
 */
export declare class USLocalAccountIdentification extends SpeakeasyBase {
    /**
     * The bank account number, without separators or whitespace.
     */
    accountNumber: string;
    /**
     * The bank account type.
     *
     * @remarks
     *
     * Possible values: **checking** or **savings**. Defaults to **checking**.
     */
    accountType?: USLocalAccountIdentificationAccountTypeEnum;
    /**
     * The 9-digit [routing number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or whitespace.
     */
    routingNumber: string;
    /**
     * **usLocal**
     */
    type: USLocalAccountIdentificationTypeEnum;
}
