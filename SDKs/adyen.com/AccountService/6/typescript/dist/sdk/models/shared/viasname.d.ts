import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The gender.
 *
 * @remarks
 * >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
 */
export declare enum ViasNameGenderEnum {
    Male = "MALE",
    Female = "FEMALE",
    Unknown = "UNKNOWN"
}
export declare class ViasName extends SpeakeasyBase {
    /**
     * The first name.
     */
    firstName?: string;
    /**
     * The gender.
     *
     * @remarks
     * >The following values are permitted: `MALE`, `FEMALE`, `UNKNOWN`.
     */
    gender?: ViasNameGenderEnum;
    /**
     * The name's infix, if applicable.
     *
     * @remarks
     * >A maximum length of twenty (20) characters is imposed.
     */
    infix?: string;
    /**
     * The last name.
     */
    lastName?: string;
}
