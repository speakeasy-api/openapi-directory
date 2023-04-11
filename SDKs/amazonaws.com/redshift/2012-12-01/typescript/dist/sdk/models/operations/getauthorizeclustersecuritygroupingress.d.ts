import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAuthorizeClusterSecurityGroupIngressActionEnum {
    AuthorizeClusterSecurityGroupIngress = "AuthorizeClusterSecurityGroupIngress"
}
export declare enum GETAuthorizeClusterSecurityGroupIngressVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class GETAuthorizeClusterSecurityGroupIngressRequest extends SpeakeasyBase {
    action: GETAuthorizeClusterSecurityGroupIngressActionEnum;
    /**
     * The IP range to be added the Amazon Redshift security group.
     */
    cidrip?: string;
    /**
     * The name of the security group to which the ingress rule is added.
     */
    clusterSecurityGroupName: string;
    /**
     * The EC2 security group to be added the Amazon Redshift security group.
     */
    ec2SecurityGroupName?: string;
    /**
     * <p>The Amazon Web Services account number of the owner of the security group specified by the <i>EC2SecurityGroupName</i> parameter. The Amazon Web Services Access Key ID is not an acceptable value. </p> <p>Example: <code>111122223333</code> </p>
     */
    ec2SecurityGroupOwnerId?: string;
    version: GETAuthorizeClusterSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAuthorizeClusterSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
