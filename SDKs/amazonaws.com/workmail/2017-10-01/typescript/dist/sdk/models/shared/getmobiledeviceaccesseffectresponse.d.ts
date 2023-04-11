import { SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessMatchedRule } from "./mobiledeviceaccessmatchedrule";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
/**
 * Success
 */
export declare class GetMobileDeviceAccessEffectResponse extends SpeakeasyBase {
    effect?: MobileDeviceAccessRuleEffectEnum;
    matchedRules?: MobileDeviceAccessMatchedRule[];
}
