import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **iban**
 */
export declare enum IbanAccountIdentificationTypeEnum {
    Iban = "iban"
}
/**
 * Contains the bank account details. The fields required in this object depend on the country of the bank account and the currency of the transfer.
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
