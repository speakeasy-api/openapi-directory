import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Add a collaborator to a resource.
 */
export declare class ResourceCollaboratorCreation extends SpeakeasyBase {
    /**
     * `True` if the related user can can manage the current document, i.e. changing the document permissions and deleting the document
     *
     * @remarks
     *
     */
    aclAdmin?: boolean;
    /**
     * `True` if the related user can read the score. (probably true if the user has a permission on the document).
     *
     * @remarks
     *
     */
    aclRead?: boolean;
    /**
     * `True` if the related user can modify the score.
     *
     * @remarks
     *
     */
    aclWrite?: boolean;
    /**
     * The unique identifier of a Flat group
     */
    group?: string;
    /**
     * The unique identifier of a Flat user
     */
    user?: string;
    /**
     * Fill this field to invite an individual user by email.
     *
     * @remarks
     *
     */
    userEmail?: string;
    /**
     * Token received in an invitation to join the score.
     *
     * @remarks
     *
     */
    userToken?: string;
}
