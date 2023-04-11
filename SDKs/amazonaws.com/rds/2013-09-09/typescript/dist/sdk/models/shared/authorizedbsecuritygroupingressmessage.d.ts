import { SpeakeasyBase } from "../../../internal/utils";
export declare class AuthorizeDBSecurityGroupIngressMessage extends SpeakeasyBase {
    cidrip?: string;
    dbSecurityGroupName: string;
    ec2SecurityGroupId?: string;
    ec2SecurityGroupName?: string;
    ec2SecurityGroupOwnerId?: string;
}
