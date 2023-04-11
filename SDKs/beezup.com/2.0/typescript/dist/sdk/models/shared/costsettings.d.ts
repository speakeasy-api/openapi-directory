import { SpeakeasyBase } from "../../../internal/utils";
import { CostTypeEnum } from "./costtypeenum";
/**
 * If this property is not indicated please force the user to configure the cost settings.
 *
 * @remarks
 * Defines the cost type you have on this channel with the cost value.
 *
 */
export declare class CostSettings extends SpeakeasyBase {
    /**
     * CPC means cost per click.
     *
     * @remarks
     * CPA means cost per action.
     * You can have CPC/CPA with a global cost value.
     * You can have CPC/CPA by category the cost value MUST be null
     * You can have global fixed price.
     *
     */
    costType: CostTypeEnum;
    /**
     * In case of global cost type, you have to indicate the cost value.
     */
    globalCostValue?: number;
}
