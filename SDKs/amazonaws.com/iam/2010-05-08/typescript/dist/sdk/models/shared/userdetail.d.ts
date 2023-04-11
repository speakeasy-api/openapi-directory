import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPermissionsBoundary } from "./attachedpermissionsboundary";
import { AttachedPolicy } from "./attachedpolicy";
import { PolicyDetail } from "./policydetail";
import { Tag } from "./tag";
/**
 * <p>Contains information about an IAM user, including all the user's policies and all the IAM groups the user is in.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export declare class UserDetail extends SpeakeasyBase {
    /**
     * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>. </p>
     */
    arn?: string;
    attachedManagedPolicies?: AttachedPolicy[];
    createDate?: Date;
    groupList?: string[];
    path?: string;
    permissionsBoundary?: AttachedPermissionsBoundary;
    tags?: Tag[];
    userId?: string;
    userName?: string;
    userPolicyList?: PolicyDetail[];
}
