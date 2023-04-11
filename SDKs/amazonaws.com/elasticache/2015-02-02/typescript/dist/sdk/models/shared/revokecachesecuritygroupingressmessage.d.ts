import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input of a <code>RevokeCacheSecurityGroupIngress</code> operation.
 */
export declare class RevokeCacheSecurityGroupIngressMessage extends SpeakeasyBase {
    cacheSecurityGroupName: string;
    ec2SecurityGroupName: string;
    ec2SecurityGroupOwnerId: string;
}
