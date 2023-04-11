import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **huLocal**
 */
export declare enum HULocalAccountIdentificationTypeEnum {
    HuLocal = "huLocal"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
 */
export declare class HULocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 24-digit bank account number, without separators or whitespace.
     */
    accountNumber: string;
    /**
     * **huLocal**
     */
    type: HULocalAccountIdentificationTypeEnum;
}
