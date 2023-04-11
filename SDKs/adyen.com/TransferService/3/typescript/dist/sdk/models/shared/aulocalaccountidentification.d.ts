import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **auLocal**
 */
export declare enum AULocalAccountIdentificationTypeEnum {
    AuLocal = "auLocal"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
 */
export declare class AULocalAccountIdentification extends SpeakeasyBase {
    /**
     * The bank account number, without separators or whitespace.
     */
    accountNumber: string;
    /**
     * The 6-digit [Bank State Branch (BSB) code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or whitespace.
     */
    bsbCode: string;
    /**
     * **auLocal**
     */
    type: AULocalAccountIdentificationTypeEnum;
}
