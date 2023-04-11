import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { IntegrationLinkModel } from "./integrationlinkmodel";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
import { SettingDataModel } from "./settingdatamodel";
import { SettingTagModel } from "./settingtagmodel";
/**
 * When everything is ok, the setting value data returned.
 */
export declare class SettingValueModel extends SpeakeasyBase {
    config?: ConfigModel;
    environment?: EnvironmentModel;
    integrationLinks?: IntegrationLinkModel[];
    lastUpdaterUserEmail?: string;
    lastUpdaterUserFullName?: string;
    readOnly?: boolean;
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
