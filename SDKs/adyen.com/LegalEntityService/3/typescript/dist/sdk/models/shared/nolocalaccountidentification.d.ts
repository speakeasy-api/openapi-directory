import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **noLocal**
 */
export declare enum NOLocalAccountIdentificationTypeEnum {
    NoLocal = "noLocal"
}
/**
 * Identification of the bank account.
 */
export declare class NOLocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 11-digit bank account number, without separators or whitespace.
     */
    accountNumber: string;
    /**
     * **noLocal**
     */
    type: NOLocalAccountIdentificationTypeEnum;
}
