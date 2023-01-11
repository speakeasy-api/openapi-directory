import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions
/** 
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
export class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowDnsResolutionFromRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}


// CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo
/** 
 * Information about the accepter VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
export class CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlockSet?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockSet?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  peeringOptions?: CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfoPeeringOptions;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


// CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions
/** 
 * Information about the VPC peering connection options for the accepter or requester VPC.
**/
export class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allowDnsResolutionFromRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalClassicLinkToRemoteVpc?: Record<string, any>;

  @SpeakeasyMetadata()
  allowEgressFromLocalVpcToRemoteClassicLink?: Record<string, any>;
}


// CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo
/** 
 * Information about the requester VPC. CIDR block information is only returned when describing an active VPC peering connection.
**/
export class CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlockSet?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockSet?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  peeringOptions?: CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfoPeeringOptions;

  @SpeakeasyMetadata()
  region?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


// CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus
/** 
 * The status of the VPC peering connection.
**/
export class CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  code?: Record<string, any>;

  @SpeakeasyMetadata()
  message?: Record<string, any>;
}


// CreateVpcPeeringConnectionResultVpcPeeringConnection
/** 
 * Information about the VPC peering connection.
**/
export class CreateVpcPeeringConnectionResultVpcPeeringConnection extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accepterVpcInfo?: CreateVpcPeeringConnectionResultVpcPeeringConnectionAccepterVpcInfo;

  @SpeakeasyMetadata()
  expirationTime?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterVpcInfo?: CreateVpcPeeringConnectionResultVpcPeeringConnectionRequesterVpcInfo;

  @SpeakeasyMetadata()
  status?: CreateVpcPeeringConnectionResultVpcPeeringConnectionStatus;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcPeeringConnectionId?: Record<string, any>;
}


export class CreateVpcPeeringConnectionResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  vpcPeeringConnection?: CreateVpcPeeringConnectionResultVpcPeeringConnection;
}
