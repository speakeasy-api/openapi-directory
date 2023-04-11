import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/>
 */
export declare class RevokeDBSecurityGroupIngressMessage extends SpeakeasyBase {
    cidrip?: string;
    dbSecurityGroupName: string;
    ec2SecurityGroupId?: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
}
