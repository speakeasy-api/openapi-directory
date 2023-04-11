import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigModel } from "./configmodel";
import { ConfigSettingValueModel } from "./configsettingvaluemodel";
import { EnvironmentModel } from "./environmentmodel";
/**
 * When everything is ok, the setting values returned.
 */
export declare class ConfigSettingValuesModel extends SpeakeasyBase {
    config?: ConfigModel;
    environment?: EnvironmentModel;
    readOnly?: boolean;
    settingValues?: ConfigSettingValueModel[];
}
