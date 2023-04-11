import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeClusterSecurityGroupsMessage extends SpeakeasyBase {
    clusterSecurityGroupName?: string;
    marker?: string;
    maxRecords?: number;
    tagKeys?: string[];
    tagValues?: string[];
}
