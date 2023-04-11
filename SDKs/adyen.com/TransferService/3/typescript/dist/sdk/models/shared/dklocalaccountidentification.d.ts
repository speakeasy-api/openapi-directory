import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **dkLocal**
 */
export declare enum DKLocalAccountIdentificationTypeEnum {
    DkLocal = "dkLocal"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
 */
export declare class DKLocalAccountIdentification extends SpeakeasyBase {
    /**
     * The 4-10 digits bank account number (Kontonummer) (without separators or whitespace).
     */
    accountNumber: string;
    /**
     * The 4-digit bank code (Registreringsnummer) (without separators or whitespace).
     */
    bankCode: string;
    /**
     * **dkLocal**
     */
    type: DKLocalAccountIdentificationTypeEnum;
}
