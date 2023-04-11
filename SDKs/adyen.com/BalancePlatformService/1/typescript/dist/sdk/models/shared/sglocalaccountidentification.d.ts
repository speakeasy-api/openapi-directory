import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **sgLocal**
 */
export declare enum SGLocalAccountIdentificationTypeEnum {
    SgLocal = "sgLocal"
}
/**
 * Bank account identification.
 */
export declare class SGLocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 4- to 19-digit bank account number, without separators or whitespace.
     */
    accountNumber: string;
    /**
     * The bank's 8- or 11-character BIC or SWIFT code.
     */
    bic: string;
    /**
     * **sgLocal**
     */
    type?: SGLocalAccountIdentificationTypeEnum;
}
