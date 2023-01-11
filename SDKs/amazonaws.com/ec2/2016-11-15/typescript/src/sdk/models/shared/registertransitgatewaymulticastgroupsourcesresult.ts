import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources
/** 
 * Information about the transit gateway multicast group sources.
**/
export class RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources extends SpeakeasyBase {
  @SpeakeasyMetadata()
  groupIpAddress?: Record<string, any>;

  @SpeakeasyMetadata()
  registeredNetworkInterfaceIds?: Record<string, any>;

  @SpeakeasyMetadata()
  transitGatewayMulticastDomainId?: Record<string, any>;
}


export class RegisterTransitGatewayMulticastGroupSourcesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  registeredMulticastGroupSources?: RegisterTransitGatewayMulticastGroupSourcesResultRegisteredMulticastGroupSources;
}
