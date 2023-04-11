import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The rights of the current user on a score or collection
 */
export declare class ResourceRights extends SpeakeasyBase {
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
     * `True` if the current user is a collaborator of the current document (direct or via group).
     *
     * @remarks
     *
     */
    isCollaborator?: boolean;
}
