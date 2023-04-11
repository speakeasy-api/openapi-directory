import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **seLocal**
 */
export declare enum SELocalAccountIdentificationTypeEnum {
    SeLocal = "seLocal"
}
/**
 * Bank account identification.
 */
export declare class SELocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 7- to 10-digit bank account number ([Bankkontonummer](https://sv.wikipedia.org/wiki/Bankkonto)), without the clearing number, separators, or whitespace.
     */
    accountNumber: string;
    /**
     * The 4- to 5-digit clearing number ([Clearingnummer](https://sv.wikipedia.org/wiki/Clearingnummer)), without separators or whitespace.
     */
    clearingNumber: string;
    /**
     * **seLocal**
     */
    type: SELocalAccountIdentificationTypeEnum;
}
