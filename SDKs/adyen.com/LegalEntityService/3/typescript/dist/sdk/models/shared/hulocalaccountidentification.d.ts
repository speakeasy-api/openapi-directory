import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **huLocal**
 */
export declare enum HULocalAccountIdentificationTypeEnum {
    HuLocal = "huLocal"
}
/**
 * Identification of the bank account.
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
