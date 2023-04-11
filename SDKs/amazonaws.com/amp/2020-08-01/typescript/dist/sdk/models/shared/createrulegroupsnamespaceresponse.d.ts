import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupsNamespaceStatus } from "./rulegroupsnamespacestatus";
/**
 * Represents the output of a CreateRuleGroupsNamespace operation.
 */
export declare class CreateRuleGroupsNamespaceResponse extends SpeakeasyBase {
    arn: string;
    name: string;
    status: RuleGroupsNamespaceStatus;
    tags?: Record<string, string>;
}
