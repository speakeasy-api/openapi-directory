import { SpeakeasyBase } from "../../../internal/utils";
import { GeneratorRecipe } from "./generatorrecipe";
/**
 * Some item types, Login and Password, have fields used for autofill. This property indicates that purpose and is required for some item types.
 */
export declare enum FieldPurposeEnum {
    Unknown = "",
    Username = "USERNAME",
    Password = "PASSWORD",
    Notes = "NOTES"
}
export declare class FieldSection extends SpeakeasyBase {
    id?: string;
}
export declare enum FieldTypeEnum {
    String = "STRING",
    Email = "EMAIL",
    Concealed = "CONCEALED",
    Url = "URL",
    Totp = "TOTP",
    Date = "DATE",
    MonthYear = "MONTH_YEAR",
    Menu = "MENU"
}
export declare class FieldInput extends SpeakeasyBase {
    /**
     * If value is not present then a new value should be generated for this field
     */
    generate?: boolean;
    id: string;
    label?: string;
    /**
     * Some item types, Login and Password, have fields used for autofill. This property indicates that purpose and is required for some item types.
     */
    purpose?: FieldPurposeEnum;
    /**
     * The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value
     */
    recipe?: GeneratorRecipe;
    section?: FieldSection;
    type: FieldTypeEnum;
    value?: string;
}
export declare class Field extends SpeakeasyBase {
    /**
     * For fields with a purpose of `PASSWORD` this is the entropy of the value
     */
    entropy?: number;
    /**
     * If value is not present then a new value should be generated for this field
     */
    generate?: boolean;
    id: string;
    label?: string;
    /**
     * Some item types, Login and Password, have fields used for autofill. This property indicates that purpose and is required for some item types.
     */
    purpose?: FieldPurposeEnum;
    /**
     * The recipe is used in conjunction with the "generate" property to set the character set used to generate a new secure value
     */
    recipe?: GeneratorRecipe;
    section?: FieldSection;
    type: FieldTypeEnum;
    value?: string;
}
