import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A person's gender (can be unknown).
 */
export declare enum NameGenderEnum {
    Male = "MALE",
    Female = "FEMALE",
    Unknown = "UNKNOWN"
}
export declare class Name extends SpeakeasyBase {
    /**
     * A person's first name.
     */
    firstName: string;
    /**
     * A person's gender (can be unknown).
     */
    gender: NameGenderEnum;
    /**
     * A person name's infix, if applicable. Maximum length: 20 characters.
     */
    infix?: string;
    /**
     * A person's last name.
     */
    lastName: string;
}
