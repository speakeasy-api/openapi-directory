import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyOwnerEntityTypeEnum } from "./policyownerentitytypeenum";
/**
 * <p>Contains details about the specified entity (user or role).</p> <p>This data type is an element of the <a>EntityDetails</a> object.</p>
 */
export declare class EntityInfo extends SpeakeasyBase {
    /**
     * <p>The Amazon Resource Name (ARN). ARNs are unique identifiers for Amazon Web Services resources.</p> <p>For more information about ARNs, go to <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>Amazon Web Services General Reference</i>. </p>
     */
    arn: string;
    id: string;
    name: string;
    path?: string;
    type: PolicyOwnerEntityTypeEnum;
}
