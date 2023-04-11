import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes a tag.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeTags extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * The Network Access Scope.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScope extends SpeakeasyBase {
    createdDate?: Date;
    networkInsightsAccessScopeArn?: string;
    networkInsightsAccessScopeId?: string;
    tags?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeTags[];
    updatedDate?: Date;
}
export declare enum CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsDestinationPacketHeaderStatementProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The packet header statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsDestinationPacketHeaderStatement extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsDestinationPacketHeaderStatementProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
/**
 * The resource statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsDestinationResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * The destination.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsDestination extends SpeakeasyBase {
    packetHeaderStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsDestinationPacketHeaderStatement;
    resourceStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsDestinationResourceStatement;
}
export declare enum CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatementProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The packet header statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatementProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
/**
 * The resource statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsSourceResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * The source.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsSource extends SpeakeasyBase {
    packetHeaderStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsSourcePacketHeaderStatement;
    resourceStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsSourceResourceStatement;
}
/**
 * The resource statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsThroughResourcesResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * Describes a through resource statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsThroughResources extends SpeakeasyBase {
    resourceStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsThroughResourcesResourceStatement;
}
/**
 * Describes a path.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePaths extends SpeakeasyBase {
    destination?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsDestination;
    source?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsSource;
    throughResources?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePathsThroughResources[];
}
export declare enum CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsDestinationPacketHeaderStatementProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The packet header statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsDestinationPacketHeaderStatement extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsDestinationPacketHeaderStatementProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
/**
 * The resource statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsDestinationResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * The destination.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsDestination extends SpeakeasyBase {
    packetHeaderStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsDestinationPacketHeaderStatement;
    resourceStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsDestinationResourceStatement;
}
export declare enum CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsSourcePacketHeaderStatementProtocolsEnum {
    Tcp = "tcp",
    Udp = "udp"
}
/**
 * The packet header statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsSourcePacketHeaderStatement extends SpeakeasyBase {
    destinationAddresses?: string[];
    destinationPorts?: string[];
    destinationPrefixLists?: string[];
    protocols?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsSourcePacketHeaderStatementProtocolsEnum[];
    sourceAddresses?: string[];
    sourcePorts?: string[];
    sourcePrefixLists?: string[];
}
/**
 * The resource statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsSourceResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * The source.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsSource extends SpeakeasyBase {
    packetHeaderStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsSourcePacketHeaderStatement;
    resourceStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsSourceResourceStatement;
}
/**
 * The resource statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsThroughResourcesResourceStatement extends SpeakeasyBase {
    resourceTypes?: string[];
    resources?: string[];
}
/**
 * Describes a through resource statement.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsThroughResources extends SpeakeasyBase {
    resourceStatement?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsThroughResourcesResourceStatement;
}
/**
 * Describes a path.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPaths extends SpeakeasyBase {
    destination?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsDestination;
    source?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsSource;
    throughResources?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPathsThroughResources[];
}
/**
 * The Network Access Scope content.
 */
export declare class CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContent extends SpeakeasyBase {
    excludePaths?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentExcludePaths[];
    matchPaths?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContentMatchPaths[];
    networkInsightsAccessScopeId?: string;
}
/**
 * Success
 */
export declare class CreateNetworkInsightsAccessScopeResult extends SpeakeasyBase {
    networkInsightsAccessScope?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScope;
    networkInsightsAccessScopeContent?: CreateNetworkInsightsAccessScopeResultNetworkInsightsAccessScopeContent;
}
