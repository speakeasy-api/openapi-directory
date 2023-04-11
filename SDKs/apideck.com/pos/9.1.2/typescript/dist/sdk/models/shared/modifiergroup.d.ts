import { SpeakeasyBase } from "../../../internal/utils";
import { CurrencyEnum } from "./currencyenum";
export declare class ModifierGroupModifiers extends SpeakeasyBase {
    alternateName?: string;
    available?: boolean;
    /**
     * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
     */
    currency?: CurrencyEnum;
    id?: string;
    name?: string;
    priceAmount?: number;
}
export declare enum ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum {
    Single = "single",
    Multiple = "multiple"
}
export declare class ModifierGroupInput extends SpeakeasyBase {
    alternateName?: string;
    deleted?: boolean;
    maximumAllowed?: number;
    minimumRequired?: number;
    modifiers?: ModifierGroupModifiers[];
    name?: string;
    presentAtAllLocations?: boolean;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    selectionType?: ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
}
export declare class ModifierGroup extends SpeakeasyBase {
    alternateName?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    deleted?: boolean;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    maximumAllowed?: number;
    minimumRequired?: number;
    modifiers?: ModifierGroupModifiers[];
    name?: string;
    presentAtAllLocations?: boolean;
    /**
     * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
     */
    rowVersion?: string;
    selectionType?: ModifierGroupIndicatesWhetherMultipleOptionsFromTheModifierGroupCanBeAppliedToASingleOrMultipleModifiersEnum;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
