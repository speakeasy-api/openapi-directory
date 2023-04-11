import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of phone number.
 *
 * @remarks
 * Possible values:
 * **Landline**, **Mobile**.
 *
 */
export declare enum PhoneTypeEnum {
    Landline = "Landline",
    Mobile = "Mobile"
}
export declare class Phone extends SpeakeasyBase {
    /**
     * The full phone number provided as a single string.
     *
     * @remarks
     * For example, **"0031 6 11 22 33 44"**, **"+316/1122-3344"**,
     *
     *  or **"(0031) 611223344"**.
     */
    number: string;
    /**
     * Type of phone number.
     *
     * @remarks
     * Possible values:
     * **Landline**, **Mobile**.
     *
     */
    type: PhoneTypeEnum;
}
