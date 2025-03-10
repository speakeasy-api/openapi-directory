/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AwsEc2NetworkInterfaceAttachment } from "./awsec2networkinterfaceattachment";
import { AwsEc2NetworkInterfaceIpV6AddressDetail } from "./awsec2networkinterfaceipv6addressdetail";
import { AwsEc2NetworkInterfacePrivateIpAddressDetail } from "./awsec2networkinterfaceprivateipaddressdetail";
import { AwsEc2NetworkInterfaceSecurityGroup } from "./awsec2networkinterfacesecuritygroup";
import { Expose, Type } from "class-transformer";

/**
 * Details about the network interface
 */
export class AwsEc2NetworkInterfaceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Attachment" })
  @Type(() => AwsEc2NetworkInterfaceAttachment)
  attachment?: AwsEc2NetworkInterfaceAttachment;

  @SpeakeasyMetadata({ elemType: AwsEc2NetworkInterfaceIpV6AddressDetail })
  @Expose({ name: "IpV6Addresses" })
  @Type(() => AwsEc2NetworkInterfaceIpV6AddressDetail)
  ipV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[];

  @SpeakeasyMetadata()
  @Expose({ name: "NetworkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ elemType: AwsEc2NetworkInterfacePrivateIpAddressDetail })
  @Expose({ name: "PrivateIpAddresses" })
  @Type(() => AwsEc2NetworkInterfacePrivateIpAddressDetail)
  privateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[];

  @SpeakeasyMetadata()
  @Expose({ name: "PublicDnsName" })
  publicDnsName?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "PublicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ elemType: AwsEc2NetworkInterfaceSecurityGroup })
  @Expose({ name: "SecurityGroups" })
  @Type(() => AwsEc2NetworkInterfaceSecurityGroup)
  securityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];

  @SpeakeasyMetadata()
  @Expose({ name: "SourceDestCheck" })
  sourceDestCheck?: boolean;
}
