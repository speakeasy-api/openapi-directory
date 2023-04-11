import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRevokeDBSecurityGroupIngressActionEnum {
    RevokeDBSecurityGroupIngress = "RevokeDBSecurityGroupIngress"
}
export declare enum GETRevokeDBSecurityGroupIngressVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETRevokeDBSecurityGroupIngressRequest extends SpeakeasyBase {
    action: GETRevokeDBSecurityGroupIngressActionEnum;
    /**
     * The IP range to revoke access from. Must be a valid CIDR range. If <code>CIDRIP</code> is specified, <code>EC2SecurityGroupName</code>, <code>EC2SecurityGroupId</code> and <code>EC2SecurityGroupOwnerId</code> can't be provided.
     */
    cidrip?: string;
    /**
     * The name of the DB security group to revoke ingress from.
     */
    dbSecurityGroupName: string;
    /**
     * The id of the EC2 security group to revoke access from. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
     */
    ec2SecurityGroupId?: string;
    /**
     * The name of the EC2 security group to revoke access from. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
     */
    ec2SecurityGroupName?: string;
    /**
     * The Amazon Web Services account number of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> parameter. The Amazon Web Services access key ID isn't an acceptable value. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, EC2SecurityGroupOwnerId and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
     */
    ec2SecurityGroupOwnerId?: string;
    version: GETRevokeDBSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRevokeDBSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
