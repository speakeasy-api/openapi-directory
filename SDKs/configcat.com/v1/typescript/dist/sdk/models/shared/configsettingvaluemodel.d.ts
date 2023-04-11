import { SpeakeasyBase } from "../../../internal/utils";
import { IntegrationLinkModel } from "./integrationlinkmodel";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
import { SettingDataModel } from "./settingdatamodel";
import { SettingTagModel } from "./settingtagmodel";
export declare class ConfigSettingValueModel extends SpeakeasyBase {
    integrationLinks?: IntegrationLinkModel[];
    lastUpdaterUserEmail?: string;
    lastUpdaterUserFullName?: string;
    /**
     * The percentage rule collection.
     */
    rolloutPercentageItems?: RolloutPercentageItemModel[];
    /**
     * The targeting rule collection.
     */
    rolloutRules?: RolloutRuleModel[];
    setting?: SettingDataModel;
    settingTags?: SettingTagModel[];
    updatedAt?: Date;
    /**
     * The value to serve. It must respect the setting type.
     */
    value?: any;
}
