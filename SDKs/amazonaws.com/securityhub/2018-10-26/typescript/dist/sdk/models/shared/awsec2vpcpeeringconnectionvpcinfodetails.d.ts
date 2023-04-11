import { SpeakeasyBase } from "../../../internal/utils";
import { VpcInfoCidrBlockSetDetails } from "./vpcinfocidrblocksetdetails";
import { VpcInfoIpv6CidrBlockSetDetails } from "./vpcinfoipv6cidrblocksetdetails";
import { VpcInfoPeeringOptionsDetails } from "./vpcinfopeeringoptionsdetails";
/**
 * Describes a VPC in a VPC peering connection.
 */
export declare class AwsEc2VpcPeeringConnectionVpcInfoDetails extends SpeakeasyBase {
    cidrBlock?: string;
    cidrBlockSet?: VpcInfoCidrBlockSetDetails[];
    ipv6CidrBlockSet?: VpcInfoIpv6CidrBlockSetDetails[];
    ownerId?: string;
    peeringOptions?: VpcInfoPeeringOptionsDetails;
    region?: string;
    vpcId?: string;
}
