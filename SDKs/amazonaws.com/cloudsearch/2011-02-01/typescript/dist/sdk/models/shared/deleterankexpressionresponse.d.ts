import { SpeakeasyBase } from "../../../internal/utils";
import { RankExpressionStatus } from "./rankexpressionstatus";
/**
 * A response message that contains the status of a deleted <code>RankExpression</code>.
 */
export declare class DeleteRankExpressionResponse extends SpeakeasyBase {
    /**
     * The value of a <code>RankExpression</code> and its current status.
     */
    rankExpression: RankExpressionStatus;
}
