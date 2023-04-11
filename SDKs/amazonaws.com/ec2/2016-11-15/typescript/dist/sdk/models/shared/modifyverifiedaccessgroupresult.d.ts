import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class ModifyVerifiedAccessGroupResultVerifiedAccessGroupTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Details of Amazon Web Services Verified Access group.
 */
export declare class ModifyVerifiedAccessGroupResultVerifiedAccessGroup extends SpeakeasyBase {
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    owner?: string;
    tags?: ModifyVerifiedAccessGroupResultVerifiedAccessGroupTags[];
    verifiedAccessGroupArn?: string;
    verifiedAccessGroupId?: string;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class ModifyVerifiedAccessGroupResult extends SpeakeasyBase {
    verifiedAccessGroup?: ModifyVerifiedAccessGroupResultVerifiedAccessGroup;
}
