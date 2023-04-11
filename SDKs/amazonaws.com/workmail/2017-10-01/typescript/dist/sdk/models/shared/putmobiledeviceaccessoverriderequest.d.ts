import { SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
export declare class PutMobileDeviceAccessOverrideRequest extends SpeakeasyBase {
    description?: string;
    deviceId: string;
    effect: MobileDeviceAccessRuleEffectEnum;
    organizationId: string;
    userId: string;
}
