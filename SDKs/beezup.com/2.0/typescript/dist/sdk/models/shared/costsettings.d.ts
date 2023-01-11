import { SpeakeasyBase } from "../../../internal/utils";
import { CostTypeEnum } from "./costtypeenum";
/**
 * If this property is not indicated please force the user to configure the cost settings.
 * Defines the cost type you have on this channel with the cost value.
 *
**/
export declare class CostSettings extends SpeakeasyBase {
    costType: CostTypeEnum;
    globalCostValue?: number;
}
