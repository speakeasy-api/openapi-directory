import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { UserPublic } from "./userpublic";
/**
 * The rights of the current user on a score or collection
 */
export declare class ResourceCollaborator extends SpeakeasyBase {
    /**
     * `True` if the current user can manage the current document (i.e. share, delete)
     *
     * @remarks
     *
     * If this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the `capabilities` property as the end-user to have the complete possibilities with the collection.
     *
     */
    aclAdmin?: boolean;
    /**
     * `True` if the current user can read the current document
     *
     * @remarks
     *
     */
    aclRead?: boolean;
    /**
     * `True` if the current user can modify the current document.
     *
     * @remarks
     *
     * If this is a right of a Collection, the capabilities of the associated user can be lower than this permission, check out the `capabilities` property as the end-user to have the complete possibilities with the collection.
     *
     */
    aclWrite?: boolean;
    /**
     * If this object is a permission of a collection, this property will contain the unique identifier of the collection
     */
    collection?: string;
    /**
     * A group of users
     */
    group?: Group;
    /**
     * The unique identifier of the permission
     */
    id?: string;
    /**
     * If this property is `true`, this is still a pending invitation
     *
     * @remarks
     *
     */
    invited?: boolean;
    /**
     * `True` if the current user is a collaborator of the current document (direct or via group).
     *
     * @remarks
     *
     */
    isCollaborator?: boolean;
    /**
     * If this object is a permission of a score, this property will contain the unique identifier of the score
     */
    score?: string;
    /**
     * Public User details
     */
    user?: UserPublic;
    /**
     * If the collaborator is not a user of Flat yet, this field will contain his email.
     *
     * @remarks
     *
     */
    userEmail?: string;
}
