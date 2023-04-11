import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { AttachedPolicy } from "./attachedpolicy";
import { InstanceProfile } from "./instanceprofile";
import { PolicyDetail } from "./policydetail";
import { RoleLastUsed } from "./rolelastused";
import { Tag } from "./tag";
/**
 * <p>Contains information about an IAM role, including all of the role's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export declare class RoleDetail extends SpeakeasyBase {
    /**
     * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>. </p>
     */
    arn?: string;
    assumeRolePolicyDocument?: string;
    attachedManagedPolicies?: AttachedPolicy[];
    createDate?: Date;
    instanceProfileList?: InstanceProfile[];
    path?: string;
    permissionsBoundary?: AttachedPermissionsBoundary;
    roleId?: string;
    roleLastUsed?: RoleLastUsed;
    roleName?: string;
    rolePolicyList?: PolicyDetail[];
    tags?: Tag[];
}
