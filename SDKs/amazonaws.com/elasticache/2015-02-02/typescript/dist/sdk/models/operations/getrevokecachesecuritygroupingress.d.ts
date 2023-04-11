import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETRevokeCacheSecurityGroupIngressActionEnum {
    RevokeCacheSecurityGroupIngress = "RevokeCacheSecurityGroupIngress"
}
export declare enum GETRevokeCacheSecurityGroupIngressVersionEnum {
    TwoThousandAndFifteen0202 = "2015-02-02"
}
export declare class GETRevokeCacheSecurityGroupIngressRequest extends SpeakeasyBase {
    action: GETRevokeCacheSecurityGroupIngressActionEnum;
    /**
     * The name of the cache security group to revoke ingress from.
     */
    cacheSecurityGroupName: string;
    /**
     * The name of the Amazon EC2 security group to revoke access from.
     */
    ec2SecurityGroupName: string;
    /**
     * The Amazon account number of the Amazon EC2 security group owner. Note that this is not the same thing as an Amazon access key ID - you must provide a valid Amazon account number for this parameter.
     */
    ec2SecurityGroupOwnerId: string;
    version: GETRevokeCacheSecurityGroupIngressVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETRevokeCacheSecurityGroupIngressResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
