import { SpeakeasyBase } from "../../../internal/utils";
import { AdditionalBankIdentification } from "./additionalbankidentification";
/**
 * **numberAndBic**
 */
export declare enum NumberAndBicAccountIdentificationTypeEnum {
    NumberAndBic = "numberAndBic"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
 */
export declare class NumberAndBicAccountIdentification extends SpeakeasyBase {
    /**
     * The bank account number, without separators or whitespace. The length and format depends on the bank or country.
     */
    accountNumber: string;
    additionalBankIdentification?: AdditionalBankIdentification;
    /**
     * The bank's 8- or 11-character BIC or SWIFT code.
     */
    bic: string;
    /**
     * **numberAndBic**
     */
    type: NumberAndBicAccountIdentificationTypeEnum;
}
