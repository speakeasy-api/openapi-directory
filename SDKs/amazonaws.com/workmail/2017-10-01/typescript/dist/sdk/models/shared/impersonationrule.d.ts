import { SpeakeasyBase } from "../../../internal/utils";
import { AccessEffectEnum } from "./accesseffectenum";
/**
 * The rules for the given impersonation role.
 */
export declare class ImpersonationRule extends SpeakeasyBase {
    description?: string;
    effect: AccessEffectEnum;
    impersonationRuleId: string;
    name?: string;
    notTargetUsers?: string[];
    targetUsers?: string[];
}
