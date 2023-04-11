import { SpeakeasyBase } from "../../../internal/utils";
import { NamedRankExpression } from "./namedrankexpression";
import { OptionStatus } from "./optionstatus";
/**
 * The value of a <code>RankExpression</code> and its current status.
 */
export declare class RankExpressionStatus extends SpeakeasyBase {
    options: NamedRankExpression;
    /**
     * The status of an option, including when it was last updated and whether it is actively in use for searches.
     */
    status: OptionStatus;
}
