import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionPrivacyEnum } from "./collectionprivacyenum";
import { CollectionTypeEnum } from "./collectiontypeenum";
import { ResourceCollaborator } from "./resourcecollaborator";
import { ResourceRights } from "./resourcerights";
import { UserPublicSummary } from "./userpublicsummary";
/**
 * Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.
 */
export declare class CollectionCapabilities extends SpeakeasyBase {
    /**
     * Whether the current user can add scores to the collection
     *
     * @remarks
     *
     * If this collection has the `type` `trash`, this property will be set to `false`. Use `DELETE /v2/scores/{score}` to trash a score.
     *
     */
    canAddScores?: boolean;
    /**
     * Whether the current user can delete the collection
     *
     * @remarks
     *
     */
    canDelete?: boolean;
    /**
     * Whether the current user can delete scores from the collection
     *
     * @remarks
     *
     * If this collection has the `type` `trash`, this property will be set to `false`. Use `POST /v2/scores/{score}/untrash` to restore a score.
     *
     */
    canDeleteScores?: boolean;
    /**
     * Whether the current user can modify the metadata for the collection
     *
     * @remarks
     *
     */
    canEdit?: boolean;
    /**
     * Whether the current user can modify the sharing settings for the collection
     *
     * @remarks
     *
     */
    canShare?: boolean;
}
/**
 * Collection of scores
 */
export declare class Collection extends SpeakeasyBase {
    /**
     * If this directory is dedicated to an app, the unique idenfier of this app
     */
    app?: string;
    /**
     * Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.
     */
    capabilities?: CollectionCapabilities;
    /**
     * The list of the collaborators of the collection
     */
    collaborators?: ResourceCollaborator[];
    /**
     * The List of parent collections, which includes all the collections this score is included. Please note that you might not have access to all of them.
     */
    collections?: string[];
    /**
     * The date when the collection was created
     */
    creationDate?: Date;
    /**
     * The url where the collection can be viewed in a web browser
     */
    htmlUrl?: string;
    /**
     * Unique identifier of the collection
     */
    id?: string;
    /**
     * The collection main privacy mode.
     *
     * @remarks
     * - `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.
     *
     */
    privacy?: CollectionPrivacyEnum;
    /**
     * The rights of the current user on a score or collection
     */
    rights?: ResourceRights;
    /**
     * The private sharing key of the collection (available when the `privacy` mode is set to `privateLink`)
     */
    sharingKey?: string;
    /**
     * The title of the collection
     */
    title?: string;
    /**
     * Type of the collection.
     *
     * @remarks
     * The type will influence the capabilitied available on the collections and how this collection is/can be populated.
     *
     */
    type?: CollectionTypeEnum;
    /**
     * Public User details summary
     */
    user?: UserPublicSummary;
}
