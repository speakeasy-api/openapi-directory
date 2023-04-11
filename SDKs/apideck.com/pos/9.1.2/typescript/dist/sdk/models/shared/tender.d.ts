import { SpeakeasyBase } from "../../../internal/utils";
export declare class TenderInput extends SpeakeasyBase {
    active?: boolean;
    /**
     * Allow tipping on payment from tender
     */
    allowsTipping?: boolean;
    editable?: boolean;
    hidden?: boolean;
    key?: string;
    label?: string;
    /**
     * If this tender opens the cash drawer
     */
    opensCashDrawer?: boolean;
}
export declare class Tender extends SpeakeasyBase {
    active?: boolean;
    /**
     * Allow tipping on payment from tender
     */
    allowsTipping?: boolean;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    editable?: boolean;
    hidden?: boolean;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    key?: string;
    label?: string;
    /**
     * If this tender opens the cash drawer
     */
    opensCashDrawer?: boolean;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
