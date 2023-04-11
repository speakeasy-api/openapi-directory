import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateVerifiedAccessGroupResultVerifiedAccessGroupTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The ID of the Verified Access group.
 */
export declare class CreateVerifiedAccessGroupResultVerifiedAccessGroup extends SpeakeasyBase {
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    owner?: string;
    tags?: CreateVerifiedAccessGroupResultVerifiedAccessGroupTags[];
    verifiedAccessGroupArn?: string;
    verifiedAccessGroupId?: string;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class CreateVerifiedAccessGroupResult extends SpeakeasyBase {
    verifiedAccessGroup?: CreateVerifiedAccessGroupResultVerifiedAccessGroup;
}
