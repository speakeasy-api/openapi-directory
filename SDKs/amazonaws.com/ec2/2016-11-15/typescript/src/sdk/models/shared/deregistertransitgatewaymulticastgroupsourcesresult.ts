import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources
/** 
 * Information about the deregistered group sources.
**/
export class DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deregisteredNetworkInterfaceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  groupIpAddress?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: Record<string, any>;
}


export class DeregisterTransitGatewayMulticastGroupSourcesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  deregisteredMulticastGroupSources?: DeregisterTransitGatewayMulticastGroupSourcesResultDeregisteredMulticastGroupSources;
}
