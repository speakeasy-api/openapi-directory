import { SpeakeasyBase } from "../../../internal/utils";
export declare class DriveGroupInput extends SpeakeasyBase {
    /**
     * A description of the object.
     */
    description?: string;
    /**
     * The display name of the drive group
     */
    displayName?: string;
    /**
     * The name of the drive group
     */
    name: string;
}
export declare class DriveGroup extends SpeakeasyBase {
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
     * The display name of the drive group
     */
    displayName?: string;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * The name of the drive group
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
