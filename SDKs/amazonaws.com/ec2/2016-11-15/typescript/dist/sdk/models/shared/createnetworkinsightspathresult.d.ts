import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The destination port range.
 */
export declare class CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtDestinationDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The source port range.
 */
export declare class CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtDestinationSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * Scopes the analysis to network paths that match specific filters at the destination.
 */
export declare class CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtDestination extends SpeakeasyBase {
    destinationAddress?: string;
    destinationPortRange?: CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtDestinationDestinationPortRange;
    sourceAddress?: string;
    sourcePortRange?: CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtDestinationSourcePortRange;
}
/**
 * The destination port range.
 */
export declare class CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtSourceDestinationPortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * The source port range.
 */
export declare class CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtSourceSourcePortRange extends SpeakeasyBase {
    fromPort?: number;
    toPort?: number;
}
/**
 * Scopes the analysis to network paths that match specific filters at the source.
 */
export declare class CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtSource extends SpeakeasyBase {
    destinationAddress?: string;
    destinationPortRange?: CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtSourceDestinationPortRange;
    sourceAddress?: string;
    sourcePortRange?: CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtSourceSourcePortRange;
}
/**
 * The protocol.
 */
export declare enum CreateNetworkInsightsPathResultNetworkInsightsPathProtocolEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * Describes a tag.
 */
export declare class CreateNetworkInsightsPathResultNetworkInsightsPathTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Information about the path.
 */
export declare class CreateNetworkInsightsPathResultNetworkInsightsPath extends SpeakeasyBase {
    createdDate?: Date;
    destination?: string;
    destinationArn?: string;
    destinationIp?: string;
    destinationPort?: number;
    filterAtDestination?: CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtDestination;
    filterAtSource?: CreateNetworkInsightsPathResultNetworkInsightsPathFilterAtSource;
    networkInsightsPathArn?: string;
    networkInsightsPathId?: string;
    protocol?: CreateNetworkInsightsPathResultNetworkInsightsPathProtocolEnum;
    source?: string;
    sourceArn?: string;
    sourceIp?: string;
    tags?: CreateNetworkInsightsPathResultNetworkInsightsPathTags[];
}
/**
 * Success
 */
export declare class CreateNetworkInsightsPathResult extends SpeakeasyBase {
    networkInsightsPath?: CreateNetworkInsightsPathResultNetworkInsightsPath;
}
