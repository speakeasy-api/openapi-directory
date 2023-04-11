import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupsNamespaceStatus } from "./rulegroupsnamespacestatus";
/**
 * Represents a description of the rule groups namespace.
 */
export declare class RuleGroupsNamespaceDescription extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    data: string;
    modifiedAt: Date;
    name: string;
    status: RuleGroupsNamespaceStatus;
    tags?: Record<string, string>;
}
