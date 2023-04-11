import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class DescribeClusterParameterGroupsMessage extends SpeakeasyBase {
    marker?: string;
    maxRecords?: number;
    parameterGroupName?: string;
    tagKeys?: string[];
    tagValues?: string[];
}
