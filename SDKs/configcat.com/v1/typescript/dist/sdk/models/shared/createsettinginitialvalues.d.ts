import { SpeakeasyBase } from "../../../internal/utils";
import { InitialValue } from "./initialvalue";
import { SettingTypeEnum } from "./settingtypeenum";
export declare class CreateSettingInitialValues extends SpeakeasyBase {
    /**
     * A short description for the setting, shown on the Dashboard UI.
     */
    hint?: string;
    /**
     * Optional, initial values of the feature flag or setting in the given Environments.
     */
    initialValues?: InitialValue[];
    /**
     * The key of the setting.
     */
    key: string;
    /**
     * The name of the setting, shown on the Dashboard UI.
     */
    name: string;
    settingType: SettingTypeEnum;
    /**
     * The IDs of the tags which are attached to the setting.
     */
    tags?: number[];
}
