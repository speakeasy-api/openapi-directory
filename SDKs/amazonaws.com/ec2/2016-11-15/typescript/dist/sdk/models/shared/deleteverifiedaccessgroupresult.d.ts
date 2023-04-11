import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DeleteVerifiedAccessGroupResultVerifiedAccessGroupTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The ID of the Amazon Web Services Verified Access group.
 */
export declare class DeleteVerifiedAccessGroupResultVerifiedAccessGroup extends SpeakeasyBase {
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    owner?: string;
    tags?: DeleteVerifiedAccessGroupResultVerifiedAccessGroupTags[];
    verifiedAccessGroupArn?: string;
    verifiedAccessGroupId?: string;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class DeleteVerifiedAccessGroupResult extends SpeakeasyBase {
    verifiedAccessGroup?: DeleteVerifiedAccessGroupResultVerifiedAccessGroup;
}
