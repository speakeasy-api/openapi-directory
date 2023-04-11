import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of an AuthorizeCacheSecurityGroupIngress operation.
 */
export declare class AuthorizeCacheSecurityGroupIngressMessage extends SpeakeasyBase {
    cacheSecurityGroupName: string;
    ec2SecurityGroupName: string;
    ec2SecurityGroupOwnerId: string;
}
