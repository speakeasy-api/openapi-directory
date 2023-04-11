import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * <p>Contains information about a managed policy.</p> <p>This data type is used as a response element in the <a>CreatePolicy</a>, <a>GetPolicy</a>, and <a>ListPolicies</a> operations. </p> <p>For more information about managed policies, refer to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline policies</a> in the <i>IAM User Guide</i>. </p>
 */
export declare class Policy extends SpeakeasyBase {
    /**
     * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>. </p>
     */
    arn?: string;
    attachmentCount?: number;
    createDate?: Date;
    defaultVersionId?: string;
    description?: string;
    isAttachable?: boolean;
    path?: string;
    permissionsBoundaryUsageCount?: number;
    policyId?: string;
    policyName?: string;
    tags?: Tag[];
    updateDate?: Date;
}
