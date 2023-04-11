import { SpeakeasyBase } from "../../../internal/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";
/**
 * Success
 */
export declare class GetAccessControlEffectResponse extends SpeakeasyBase {
    effect?: AccessControlRuleEffectEnum;
    matchedRules?: string[];
}
