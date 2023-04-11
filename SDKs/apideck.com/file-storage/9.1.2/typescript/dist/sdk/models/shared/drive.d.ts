import { SpeakeasyBase } from "../../../internal/utils";
export declare class DriveInput extends SpeakeasyBase {
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * The name of the drive
     */
    name: string;
}
export declare class Drive extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * The name of the drive
     */
    name: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
