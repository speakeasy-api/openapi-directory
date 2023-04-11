import { SpeakeasyBase } from "../../../internal/utils";
import { RolloutPercentageItemModel } from "./rolloutpercentageitemmodel";
import { RolloutRuleModel } from "./rolloutrulemodel";
export declare class UpdateSettingValueModel extends SpeakeasyBase {
    /**
     * The percentage rule collection.
     */
    rolloutPercentageItems?: RolloutPercentageItemModel[];
    /**
     * The targeting rule collection.
     */
    rolloutRules?: RolloutRuleModel[];
    /**
     * The value to serve. It must respect the setting type.
     */
    value?: any;
}
