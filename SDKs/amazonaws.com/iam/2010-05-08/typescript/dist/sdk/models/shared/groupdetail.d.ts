import { SpeakeasyBase } from "../../../internal/utils";
import { AttachedPolicy } from "./attachedpolicy";
import { PolicyDetail } from "./policydetail";
/**
 * <p>Contains information about an IAM group, including all of the group's policies.</p> <p>This data type is used as a response element in the <a>GetAccountAuthorizationDetails</a> operation.</p>
 */
export declare class GroupDetail extends SpeakeasyBase {
    /**
     * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>. </p>
     */
    arn?: string;
    attachedManagedPolicies?: AttachedPolicy[];
    createDate?: Date;
    groupId?: string;
    groupName?: string;
    groupPolicyList?: PolicyDetail[];
    path?: string;
}
