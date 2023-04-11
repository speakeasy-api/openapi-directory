import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAuthorizeCacheSecurityGroupIngressActionEnum {
    AuthorizeCacheSecurityGroupIngress = "AuthorizeCacheSecurityGroupIngress"
}
export declare enum GETAuthorizeCacheSecurityGroupIngressVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETAuthorizeCacheSecurityGroupIngressRequest extends SpeakeasyBase {
    action: GETAuthorizeCacheSecurityGroupIngressActionEnum;
    /**
     * The cache security group that allows network ingress.
     */
    cacheSecurityGroupName: string;
    /**
     * The Amazon EC2 security group to be authorized for ingress to the cache security group.
     */
    ec2SecurityGroupName: string;
    /**
     * The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.
     */
    ec2SecurityGroupOwnerId: string;
    version: GETAuthorizeCacheSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAuthorizeCacheSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
