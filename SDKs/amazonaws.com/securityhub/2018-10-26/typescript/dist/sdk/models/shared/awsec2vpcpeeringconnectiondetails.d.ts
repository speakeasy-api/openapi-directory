import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2VpcPeeringConnectionStatusDetails } from "./awsec2vpcpeeringconnectionstatusdetails";
import { AwsEc2VpcPeeringConnectionVpcInfoDetails } from "./awsec2vpcpeeringconnectionvpcinfodetails";
/**
 * Provides information about a VPC peering connection between two VPCs: a requester VPC that you own and an accepter VPC with which to create the connection.
 */
export declare class AwsEc2VpcPeeringConnectionDetails extends SpeakeasyBase {
    accepterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
    expirationTime?: string;
    requesterVpcInfo?: AwsEc2VpcPeeringConnectionVpcInfoDetails;
    status?: AwsEc2VpcPeeringConnectionStatusDetails;
    vpcPeeringConnectionId?: string;
}
