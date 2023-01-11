import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
/** 
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
export class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowDnsResolutionFromRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}


// AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
/** 
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
export class AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlockSet?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockSet?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  peeringOptions?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


// AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
/** 
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
export class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowDnsResolutionFromRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}


// AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
/** 
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
export class AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlockSet?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockSet?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  peeringOptions?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


// AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus
/** 
 * The status of the VPC peering connection.
**/
export class AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// AcceptVpcPeeringConnectionResultVpcPeeringConnection
/** 
 * Information about the VPC peering connection.
**/
export class AcceptVpcPeeringConnectionResultVpcPeeringConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterVpcInfo?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;

  @SpeakeasyMetadata()
  expirationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterVpcInfo?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;

  @SpeakeasyMetadata()
  status?: AcceptVpcPeeringConnectionResultVpcPeeringConnectionStatus;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcPeeringConnectionId?: Record<string, any>;
}


export class AcceptVpcPeeringConnectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpcPeeringConnection?: AcceptVpcPeeringConnectionResultVpcPeeringConnection;
}
