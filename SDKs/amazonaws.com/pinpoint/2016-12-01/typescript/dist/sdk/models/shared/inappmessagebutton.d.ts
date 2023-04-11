import { SpeakeasyBase } from "../../../internal/utils";
import { DefaultButtonConfiguration } from "./defaultbuttonconfiguration";
import { OverrideButtonConfiguration } from "./overridebuttonconfiguration";
/**
 * Button Config for an in-app message.
 */
export declare class InAppMessageButton extends SpeakeasyBase {
    android?: OverrideButtonConfiguration;
    defaultConfig?: DefaultButtonConfiguration;
    ios?: OverrideButtonConfiguration;
    web?: OverrideButtonConfiguration;
}
