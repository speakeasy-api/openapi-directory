import { SpeakeasyBase } from "../../../internal/utils";
export declare class DepartmentInput extends SpeakeasyBase {
    code?: string;
    description?: string;
    /**
     * Department name
     */
    name?: string;
}
export declare class Department extends SpeakeasyBase {
    code?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    description?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * Department name
     */
    name?: string;
    /**
     * Parent ID
     */
    parentId?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
    /**
     * The user who last updated the object.
     */
    updatedBy?: string;
}
