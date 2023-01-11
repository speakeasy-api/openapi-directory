import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceCollaborator } from "./resourcecollaborator";
import { CollectionPrivacyEnum } from "./collectionprivacyenum";
import { ResourceRights } from "./resourcerights";
import { CollectionTypeEnum } from "./collectiontypeenum";
import { UserPublicSummary } from "./userpublicsummary";
/**
 * Capabilities the current user has on this collection. Each capability corresponds to a fine-grained action that a user may take.
**/
export declare class CollectionCapabilities extends SpeakeasyBase {
    canAddScores?: boolean;
    canDelete?: boolean;
    canDeleteScores?: boolean;
    canEdit?: boolean;
    canShare?: boolean;
}
/**
 * Collection of scores
**/
export declare class Collection extends SpeakeasyBase {
    app?: string;
    capabilities?: CollectionCapabilities;
    collaborators?: ResourceCollaborator[];
    collections?: string[];
    creationDate?: Date;
    htmlUrl?: string;
    id?: string;
    privacy?: CollectionPrivacyEnum;
    rights?: ResourceRights;
    sharingKey?: string;
    title?: string;
    type?: CollectionTypeEnum;
    user?: UserPublicSummary;
}
