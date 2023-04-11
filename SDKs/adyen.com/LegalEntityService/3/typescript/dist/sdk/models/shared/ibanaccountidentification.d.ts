import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **iban**
 */
export declare enum IbanAccountIdentificationTypeEnum {
    Iban = "iban"
}
/**
 * Identification of the bank account.
 */
export declare class IbanAccountIdentification extends SpeakeasyBase {
    /**
     * The international bank account number as defined in the [ISO-13616](https://www.iso.org/standard/81090.html) standard.
     */
    iban: string;
    /**
     * **iban**
     */
    type: IbanAccountIdentificationTypeEnum;
}
