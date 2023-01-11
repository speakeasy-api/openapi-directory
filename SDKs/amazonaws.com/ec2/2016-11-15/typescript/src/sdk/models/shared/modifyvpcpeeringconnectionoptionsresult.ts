import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions
/** 
 * Information about the VPC peering connection options for the accepter VPC.
**/
export class ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowDnsResolutionFromRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}


// ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions
/** 
 * Information about the VPC peering connection options for the requester VPC.
**/
export class ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowDnsResolutionFromRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}


export class ModifyVpcPeeringConnectionOptionsResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterPeeringConnectionOptions?: ModifyVpcPeeringConnectionOptionsResultAccepterPeeringConnectionOptions;

  @SpeakeasyMetadata()
  requesterPeeringConnectionOptions?: ModifyVpcPeeringConnectionOptionsResultRequesterPeeringConnectionOptions;
}
