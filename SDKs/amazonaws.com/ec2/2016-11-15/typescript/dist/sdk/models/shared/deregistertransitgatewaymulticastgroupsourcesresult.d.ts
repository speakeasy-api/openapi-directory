import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the deregistered group sources.
 */
export declare class DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources extends SpeakeasyBase {
    deregisteredNetworkInterfaceIds?: string[];
    groupIpAddress?: string;
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class DeregisterTransitGatewayMulticastGroupSourcesResult extends SpeakeasyBase {
    deregisteredMulticastGroupSources?: DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources;
}
