import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class DescribeVerifiedAccessGroupsResultVerifiedAccessGroupsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a Verified Access group.
 */
export declare class DescribeVerifiedAccessGroupsResultVerifiedAccessGroups extends SpeakeasyBase {
    creationTime?: string;
    deletionTime?: string;
    description?: string;
    lastUpdatedTime?: string;
    owner?: string;
    tags?: DescribeVerifiedAccessGroupsResultVerifiedAccessGroupsTags[];
    verifiedAccessGroupArn?: string;
    verifiedAccessGroupId?: string;
    verifiedAccessInstanceId?: string;
}
/**
 * Success
 */
export declare class DescribeVerifiedAccessGroupsResult extends SpeakeasyBase {
    nextToken?: string;
    verifiedAccessGroups?: DescribeVerifiedAccessGroupsResultVerifiedAccessGroups[];
}
