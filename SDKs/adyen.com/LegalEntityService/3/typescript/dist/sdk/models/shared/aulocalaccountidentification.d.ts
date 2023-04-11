import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **auLocal**
 */
export declare enum AULocalAccountIdentificationTypeEnum {
    AuLocal = "auLocal"
}
/**
 * Identification of the bank account.
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
