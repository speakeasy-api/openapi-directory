import { SpeakeasyBase } from "../../../internal/utils";
export declare class RolloutPercentageItemModel extends SpeakeasyBase {
    /**
     * The percentage value for the rule.
     */
    percentage: number;
    /**
     * The value to serve when the user falls in the percentage rule. It must respect the setting type.
     */
    value?: any;
}
