import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsDestinationPacketHeaderStatementProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The packet header statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsDestinationPacketHeaderStatement extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsDestinationPacketHeaderStatementProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
/**
 * The resource statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsDestinationResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * The destination.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsDestination extends SpeakeasyBase {
    packetHeaderStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsDestinationPacketHeaderStatement;
    resourceStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsDestinationResourceStatement;
}
export declare enum GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatementProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The packet header statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatementProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
/**
 * The resource statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourceResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * The source.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSource extends SpeakeasyBase {
    packetHeaderStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement;
    resourceStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSourceResourceStatement;
}
/**
 * The resource statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsThroughResourcesResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * Describes a through resource statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsThroughResources extends SpeakeasyBase {
    resourceStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsThroughResourcesResourceStatement;
}
/**
 * Describes a path.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePaths extends SpeakeasyBase {
    destination?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsDestination;
    source?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsSource;
    throughResources?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePathsThroughResources[];
}
export declare enum GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestinationPacketHeaderStatementProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The packet header statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestinationPacketHeaderStatement extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestinationPacketHeaderStatementProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
/**
 * The resource statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestinationResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * The destination.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestination extends SpeakeasyBase {
    packetHeaderStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestinationPacketHeaderStatement;
    resourceStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestinationResourceStatement;
}
export declare enum GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSourcePacketHeaderStatementProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The packet header statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSourcePacketHeaderStatement extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSourcePacketHeaderStatementProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
/**
 * The resource statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSourceResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * The source.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSource extends SpeakeasyBase {
    packetHeaderStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSourcePacketHeaderStatement;
    resourceStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSourceResourceStatement;
}
/**
 * The resource statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsThroughResourcesResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * Describes a through resource statement.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsThroughResources extends SpeakeasyBase {
    resourceStatement?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsThroughResourcesResourceStatement;
}
/**
 * Describes a path.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPaths extends SpeakeasyBase {
    destination?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsDestination;
    source?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsSource;
    throughResources?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPathsThroughResources[];
}
/**
 * The Network Access Scope content.
 */
export declare class GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContent extends SpeakeasyBase {
    excludePaths?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentExcludePaths[];
    matchPaths?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContentMatchPaths[];
    networkInsightsAccessScopeId?: string;
}
/**
 * Success
 */
export declare class GetNetworkInsightsAccessScopeContentResult extends SpeakeasyBase {
    networkInsightsAccessScopeContent?: GetNetworkInsightsAccessScopeContentResultNetworkInsightsAccessScopeContent;
}
