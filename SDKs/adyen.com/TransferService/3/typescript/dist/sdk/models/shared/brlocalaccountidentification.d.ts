import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **brLocal**
 */
export declare enum BRLocalAccountIdentificationTypeEnum {
    BrLocal = "brLocal"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
 */
export declare class BRLocalAccountIdentification extends SpeakeasyBase {
    /**
     * The bank account number (without separators or whitespace).
     */
    accountNumber: string;
    /**
     * The 3-digit Brazilian bank code (with leading zeros).
     */
    bankCode: string;
    /**
     * The bank account branch number (without separators or whitespace).
     */
    branchNumber: string;
    /**
     * **brLocal**
     */
    type: BRLocalAccountIdentificationTypeEnum;
}
