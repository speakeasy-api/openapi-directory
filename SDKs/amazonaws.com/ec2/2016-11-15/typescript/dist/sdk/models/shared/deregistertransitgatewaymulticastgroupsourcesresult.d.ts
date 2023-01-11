import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the deregistered group sources.
**/
export declare class DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources extends SpeakeasyBase {
    deregisteredNetworkInterfaceIds?: Record<string, any>;
    groupIpAddress?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class DeregisterTransitGatewayMulticastGroupSourcesResult extends SpeakeasyBase {
    deregisteredMulticastGroupSources?: DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources;
}
