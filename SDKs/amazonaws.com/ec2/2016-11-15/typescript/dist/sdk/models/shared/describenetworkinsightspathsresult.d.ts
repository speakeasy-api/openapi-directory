import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range.
 */
export declare class DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtDestinationDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The source port range.
 */
export declare class DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtDestinationSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * Scopes the analysis to network paths that match specific filters at the destination.
 */
export declare class DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtDestination extends SpeakeasyBase {
    destinationAddress?: string;
    destinationPortRange?: DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtDestinationDestinationPortRange;
    sourceAddress?: string;
    sourcePortRange?: DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtDestinationSourcePortRange;
}
/**
 * The destination port range.
 */
export declare class DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtSourceDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The source port range.
 */
export declare class DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtSourceSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * Scopes the analysis to network paths that match specific filters at the source.
 */
export declare class DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtSource extends SpeakeasyBase {
    destinationAddress?: string;
    destinationPortRange?: DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtSourceDestinationPortRange;
    sourceAddress?: string;
    sourcePortRange?: DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtSourceSourcePortRange;
}
/**
 * The protocol.
 */
export declare enum DescribeNetworkInsightsPathsResultNetworkInsightsPathsProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Describes a tag.
 */
export declare class DescribeNetworkInsightsPathsResultNetworkInsightsPathsTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Describes a path.
 */
export declare class DescribeNetworkInsightsPathsResultNetworkInsightsPaths extends SpeakeasyBase {
    createdDate?: Date;
    destination?: string;
    destinationArn?: string;
    destinationIp?: string;
    destinationPort?: number;
    filterAtDestination?: DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtDestination;
    filterAtSource?: DescribeNetworkInsightsPathsResultNetworkInsightsPathsFilterAtSource;
    networkInsightsPathArn?: string;
    networkInsightsPathId?: string;
    protocol?: DescribeNetworkInsightsPathsResultNetworkInsightsPathsProtocolEnum;
    source?: string;
    sourceArn?: string;
    sourceIp?: string;
    tags?: DescribeNetworkInsightsPathsResultNetworkInsightsPathsTags[];
}
/**
 * Success
 */
export declare class DescribeNetworkInsightsPathsResult extends SpeakeasyBase {
    networkInsightsPaths?: DescribeNetworkInsightsPathsResultNetworkInsightsPaths[];
    nextToken?: string;
}
