import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupsNamespaceStatus } from "./rulegroupsnamespacestatus";
/**
 * Represents a summary of the rule groups namespace.
 */
export declare class RuleGroupsNamespaceSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    modifiedAt: Date;
    name: string;
    status: RuleGroupsNamespaceStatus;
    tags?: Record<string, string>;
}
