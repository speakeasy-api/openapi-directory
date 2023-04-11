import { SpeakeasyBase } from "../../../internal/utils";
import { AccessEffectEnum } from "./accesseffectenum";
import { ImpersonationMatchedRule } from "./impersonationmatchedrule";
import { ImpersonationRoleTypeEnum } from "./impersonationroletypeenum";
/**
 * Success
 */
export declare class GetImpersonationRoleEffectResponse extends SpeakeasyBase {
    effect?: AccessEffectEnum;
    matchedRules?: ImpersonationMatchedRule[];
    type?: ImpersonationRoleTypeEnum;
}
