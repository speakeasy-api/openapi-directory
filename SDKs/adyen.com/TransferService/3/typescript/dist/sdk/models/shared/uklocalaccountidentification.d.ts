import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **ukLocal**
 */
export declare enum UKLocalAccountIdentificationTypeEnum {
    UkLocal = "ukLocal"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
 */
export declare class UKLocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 8-digit bank account number, without separators or whitespace.
     */
    accountNumber: string;
    /**
     * The 6-digit [sort code](https://en.wikipedia.org/wiki/Sort_code), without separators or whitespace.
     */
    sortCode: string;
    /**
     * **ukLocal**
     */
    type: UKLocalAccountIdentificationTypeEnum;
}
