import { SpeakeasyBase } from "../../../internal/utils";
import { PolicySourceTypeEnum } from "./policysourcetypeenum";
import { Position } from "./position";
/**
 * <p>Contains a reference to a <code>Statement</code> element in a policy document that determines the result of the simulation.</p> <p>This data type is used by the <code>MatchedStatements</code> member of the <code> <a>EvaluationResult</a> </code> type.</p>
 */
export declare class Statement extends SpeakeasyBase {
    endPosition?: Position;
    sourcePolicyId?: string;
    sourcePolicyType?: PolicySourceTypeEnum;
    startPosition?: Position;
}
