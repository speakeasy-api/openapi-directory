import { SpeakeasyBase } from "../../../internal/utils";
export declare class CollectionTicketCommentInput extends SpeakeasyBase {
    /**
     * Body of the comment
     */
    body?: string;
}
export declare class CollectionTicketComment extends SpeakeasyBase {
    /**
     * Body of the comment
     */
    body?: string;
    /**
     * The date and time when the object was created.
     */
    createdAt?: Date;
    /**
     * The user who created the object.
     */
    createdBy?: string;
    /**
     * A unique identifier for an object.
     */
    id?: string;
    /**
     * The date and time when the object was last updated.
     */
    updatedAt?: Date;
}
