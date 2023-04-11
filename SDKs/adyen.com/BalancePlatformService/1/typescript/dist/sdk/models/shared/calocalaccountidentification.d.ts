import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **caLocal**
 */
export declare enum CALocalAccountIdentificationTypeEnum {
    CaLocal = "caLocal"
}
/**
 * Bank account identification.
 */
export declare class CALocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 5- to 12-digit bank account number, without separators or whitespace.
     */
    accountNumber: string;
    /**
     * The 3-digit institution number, without separators or whitespace.
     */
    institutionNumber: string;
    /**
     * The 5-digit transit number, without separators or whitespace.
     */
    transitNumber: string;
    /**
     * **caLocal**
     */
    type: CALocalAccountIdentificationTypeEnum;
}
