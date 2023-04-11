import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class RevokeClusterSecurityGroupIngressMessage extends SpeakeasyBase {
    cidrip?: string;
    clusterSecurityGroupName: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
}
