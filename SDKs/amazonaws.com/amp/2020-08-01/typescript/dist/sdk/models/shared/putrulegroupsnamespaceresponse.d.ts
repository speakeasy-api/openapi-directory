import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupsNamespaceStatus } from "./rulegroupsnamespacestatus";
/**
 * Represents the output of a PutRuleGroupsNamespace operation.
 */
export declare class PutRuleGroupsNamespaceResponse extends SpeakeasyBase {
    arn: string;
    name: string;
    status: RuleGroupsNamespaceStatus;
    tags?: Record<string, string>;
}
