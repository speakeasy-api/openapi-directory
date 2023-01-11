import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the transit gateway multicast group sources.
**/
export declare class RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources extends SpeakeasyBase {
    groupIpAddress?: Record<string, any>;
    registeredNetworkInterfaceIds?: Record<string, any>;
    transitGatewayMulticastDomainId?: Record<string, any>;
}
export declare class RegisterTransitGatewayMulticastGroupSourcesResult extends SpeakeasyBase {
    registeredMulticastGroupSources?: RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources;
}
