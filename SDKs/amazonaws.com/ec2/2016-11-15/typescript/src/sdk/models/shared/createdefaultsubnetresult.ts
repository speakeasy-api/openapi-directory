import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateDefaultSubnetResultSubnet
/** 
 * Information about the subnet.
**/
export class CreateDefaultSubnetResultSubnet extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignIpv6AddressOnCreation?: Record<string, any>;

  @SpeakeasyMetadata()
  availabilityZone?: Record<string, any>;

  @SpeakeasyMetadata()
  availabilityZoneId?: Record<string, any>;

  @SpeakeasyMetadata()
  availableIpAddressCount?: Record<string, any>;

  @SpeakeasyMetadata()
  cidrBlock?: Record<string, any>;

  @SpeakeasyMetadata()
  customerOwnedIpv4Pool?: Record<string, any>;

  @SpeakeasyMetadata()
  defaultForAz?: Record<string, any>;

  @SpeakeasyMetadata()
  ipv6CidrBlockAssociationSet?: Record<string, any>;

  @SpeakeasyMetadata()
  mapCustomerOwnedIpOnLaunch?: Record<string, any>;

  @SpeakeasyMetadata()
  mapPublicIpOnLaunch?: Record<string, any>;

  @SpeakeasyMetadata()
  outpostArn?: Record<string, any>;

  @SpeakeasyMetadata()
  ownerId?: Record<string, any>;

  @SpeakeasyMetadata()
  state?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetArn?: Record<string, any>;

  @SpeakeasyMetadata()
  subnetId?: Record<string, any>;

  @SpeakeasyMetadata()
  tags?: Record<string, any>;

  @SpeakeasyMetadata()
  vpcId?: Record<string, any>;
}


export class CreateDefaultSubnetResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  subnet?: CreateDefaultSubnetResultSubnet;
}
