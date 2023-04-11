import { SpeakeasyBase } from "../../../internal/utils";
export declare class Collection extends SpeakeasyBase {
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * Description of the collection
     */
    description?: string;
    /**
     * A unique identifier for an object.
     */
    id: string;
    /**
     * Name of the collection
     */
    name?: string;
    /**
     * The collections's parent ID
     */
    parentId?: string;
    /**
     * The collections's type
     */
    type?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
}
