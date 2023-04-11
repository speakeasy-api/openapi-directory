import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAuthorizeDBSecurityGroupIngressActionEnum {
    AuthorizeDBSecurityGroupIngress = "AuthorizeDBSecurityGroupIngress"
}
export declare enum GETAuthorizeDBSecurityGroupIngressVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GETAuthorizeDBSecurityGroupIngressRequest extends SpeakeasyBase {
    action: GETAuthorizeDBSecurityGroupIngressActionEnum;
    /**
     * The IP range to authorize.
     */
    cidrip?: string;
    /**
     * The name of the DB security group to add authorization to.
     */
    dbSecurityGroupName: string;
    /**
     * Id of the EC2 security group to authorize. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
     */
    ec2SecurityGroupId?: string;
    /**
     * Name of the EC2 security group to authorize. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
     */
    ec2SecurityGroupName?: string;
    /**
     * Amazon Web Services account number of the owner of the EC2 security group specified in the <code>EC2SecurityGroupName</code> parameter. The Amazon Web Services access key ID isn't an acceptable value. For VPC DB security groups, <code>EC2SecurityGroupId</code> must be provided. Otherwise, <code>EC2SecurityGroupOwnerId</code> and either <code>EC2SecurityGroupName</code> or <code>EC2SecurityGroupId</code> must be provided.
     */
    ec2SecurityGroupOwnerId?: string;
    version: GETAuthorizeDBSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAuthorizeDBSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
