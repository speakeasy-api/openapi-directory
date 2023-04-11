import { SpeakeasyBase } from "../../../internal/utils";
import { DesiredConfiguration } from "./desiredconfiguration";
import { RefreshPreferences } from "./refreshpreferences";
import { RefreshStrategyEnum } from "./refreshstrategyenum";
export declare class StartInstanceRefreshType extends SpeakeasyBase {
    autoScalingGroupName: string;
    desiredConfiguration?: DesiredConfiguration;
    preferences?: RefreshPreferences;
    strategy?: RefreshStrategyEnum;
}
