import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupsNamespaceStatusCodeEnum } from "./rulegroupsnamespacestatuscodeenum";
/**
 * Represents the status of a namespace.
 */
export declare class RuleGroupsNamespaceStatus extends SpeakeasyBase {
    statusCode: RuleGroupsNamespaceStatusCodeEnum;
    statusReason?: string;
}
