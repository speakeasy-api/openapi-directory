import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the transit gateway multicast group sources.
 */
export declare class RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources extends SpeakeasyBase {
    groupIpAddress?: string;
    registeredNetworkInterfaceIds?: string[];
    transitGatewayMulticastDomainId?: string;
}
/**
 * Success
 */
export declare class RegisterTransitGatewayMulticastGroupSourcesResult extends SpeakeasyBase {
    registeredMulticastGroupSources?: RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources;
}
