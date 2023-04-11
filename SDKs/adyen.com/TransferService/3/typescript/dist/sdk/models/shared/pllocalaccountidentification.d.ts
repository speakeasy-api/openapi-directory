import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **plLocal**
 */
export declare enum PLLocalAccountIdentificationTypeEnum {
    PlLocal = "plLocal"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
 */
export declare class PLLocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 26-digit bank account number ([Numer rachunku](https://pl.wikipedia.org/wiki/Numer_Rachunku_Bankowego)), without separators or whitespace.
     */
    accountNumber: string;
    /**
     * **plLocal**
     */
    type: PLLocalAccountIdentificationTypeEnum;
}
