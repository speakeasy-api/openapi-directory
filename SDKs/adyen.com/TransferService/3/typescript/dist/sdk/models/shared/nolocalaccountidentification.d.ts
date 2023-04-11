import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **noLocal**
 */
export declare enum NOLocalAccountIdentificationTypeEnum {
    NoLocal = "noLocal"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
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
