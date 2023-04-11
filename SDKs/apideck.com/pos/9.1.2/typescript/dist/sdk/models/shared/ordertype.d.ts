import { SpeakeasyBase } from "../../../internal/utils";
export declare class OrderTypeInput extends SpeakeasyBase {
    default?: boolean;
    name?: string;
}
export declare class OrderType extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    default?: boolean;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    name?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
