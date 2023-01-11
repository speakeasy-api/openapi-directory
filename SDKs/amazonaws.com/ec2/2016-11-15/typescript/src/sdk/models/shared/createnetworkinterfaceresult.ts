import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateNetworkInterfaceResultNetworkInterfaceAssociation
/** 
 * The association information for an Elastic IP address (IPv4) associated with the network interface.
**/
export class CreateNetworkInterfaceResultNetworkInterfaceAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata()
  allocationId?: Record<string, any>;

  @SpeakeasyMetadata()
  associationId?: Record<string, any>;

  @SpeakeasyMetadata()
  carrierIp?: Record<string, any>;

  @SpeakeasyMetadata()
  customerOwnedIp?: Record<string, any>;

  @SpeakeasyMetadata()
  ipOwnerId?: Record<string, any>;

  @SpeakeasyMetadata()
  publicDnsName?: Record<string, any>;

  @SpeakeasyMetadata()
  publicIp?: Record<string, any>;
}


// CreateNetworkInterfaceResultNetworkInterfaceAttachment
/** 
 * The network interface attachment.
**/
export class CreateNetworkInterfaceResultNetworkInterfaceAttachment extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attachTime?: Record<string, any>;

  @SpeakeasyMetadata()
  attachmentId?: Record<string, any>;

  @SpeakeasyMetadata()
  deleteOnTermination?: Record<string, any>;

  @SpeakeasyMetadata()
  deviceIndex?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceId?: Record<string, any>;

  @SpeakeasyMetadata()
  instanceOwnerId?: Record<string, any>;

  @SpeakeasyMetadata()
  networkCardIndex?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;
}


// CreateNetworkInterfaceResultNetworkInterface
/** 
 * Information about the network interface.
**/
export class CreateNetworkInterfaceResultNetworkInterface extends SpeakeasyBase {
  @SpeakeasyMetadata()
  association?: CreateNetworkInterfaceResultNetworkInterfaceAssociation;

  @SpeakeasyMetadata()
  attachment?: CreateNetworkInterfaceResultNetworkInterfaceAttachment;

  @SpeakeasyMetadata()
  availabilityZone?: Record<string, any>;

  @SpeakeasyMetadata()
  description?: Record<string, any>;

  @SpeakeasyMetadata()
  groups?: Record<string, any>;

  @SpeakeasyMetadata()
  interfaceType?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv4Prefixes?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6Addresses?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6Prefixes?: Record<string, any>;

  @SpeakeasyMetadata()
  macAddress?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterfaceId?: Record<string, any>;

  @SpeakeasyMetadata()
  outpostArn?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  privateDnsName?: Record<string, any>;

  @SpeakeasyMetadata()
  privateIpAddress?: Record<string, any>;

  @SpeakeasyMetadata()
  privateIpAddresses?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterId?: Record<string, any>;

  @SpeakeasyMetadata()
  requesterManaged?: Record<string, any>;

  @SpeakeasyMetadata()
  sourceDestCheck?: Record<string, any>;

  @SpeakeasyMetadata()
  status?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetId?: Record<string, any>;

  @SpeakeasyMetadata()
  tagSet?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


// CreateNetworkInterfaceResult
/** 
 * Contains the output of CreateNetworkInterface.
**/
export class CreateNetworkInterfaceResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientToken?: Record<string, any>;

  @SpeakeasyMetadata()
  networkInterface?: CreateNetworkInterfaceResultNetworkInterface;
}
