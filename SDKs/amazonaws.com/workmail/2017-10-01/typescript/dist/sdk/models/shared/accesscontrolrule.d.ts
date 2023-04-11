import { SpeakeasyBase } from "../../../internal/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";
/**
 * A rule that controls access to an WorkMail organization.
 */
export declare class AccessControlRule extends SpeakeasyBase {
    actions?: string[];
    dateCreated?: Date;
    dateModified?: Date;
    description?: string;
    effect?: AccessControlRuleEffectEnum;
    impersonationRoleIds?: string[];
    ipRanges?: string[];
    name?: string;
    notActions?: string[];
    notImpersonationRoleIds?: string[];
    notIpRanges?: string[];
    notUserIds?: string[];
    userIds?: string[];
}
