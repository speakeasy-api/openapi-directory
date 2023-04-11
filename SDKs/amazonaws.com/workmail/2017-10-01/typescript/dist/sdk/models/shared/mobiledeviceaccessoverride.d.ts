import { SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
/**
 * The override object.
 */
export declare class MobileDeviceAccessOverride extends SpeakeasyBase {
    dateCreated?: Date;
    dateModified?: Date;
    description?: string;
    deviceId?: string;
    effect?: MobileDeviceAccessRuleEffectEnum;
    userId?: string;
}
