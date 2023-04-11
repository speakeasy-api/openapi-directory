import { SpeakeasyBase } from "../../../internal/utils";
import { MobileDeviceAccessRuleEffectEnum } from "./mobiledeviceaccessruleeffectenum";
/**
 * Success
 */
export declare class GetMobileDeviceAccessOverrideResponse extends SpeakeasyBase {
    dateCreated?: Date;
    dateModified?: Date;
    description?: string;
    deviceId?: string;
    effect?: MobileDeviceAccessRuleEffectEnum;
    userId?: string;
}
