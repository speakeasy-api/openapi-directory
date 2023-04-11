import { SpeakeasyBase } from "../../../internal/utils";
import { AutoAdjustTypeEnum } from "./autoadjusttypeenum";
import { HistoricalOptions } from "./historicaloptions";
/**
 * The parameters that determine the budget amount for an auto-adjusting budget.
 */
export declare class AutoAdjustData extends SpeakeasyBase {
    autoAdjustType: AutoAdjustTypeEnum;
    historicalOptions?: HistoricalOptions;
    lastAutoAdjustTime?: Date;
}
