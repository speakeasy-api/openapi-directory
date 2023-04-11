import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementConstraintTypeEnum } from "./placementconstrainttypeenum";
/**
 * <p>An object representing a constraint on task placement. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task placement constraints</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <note> <p>If you're using the Fargate launch type, task placement constraints aren't supported.</p> </note>
 */
export declare class PlacementConstraint extends SpeakeasyBase {
    expression?: string;
    type?: PlacementConstraintTypeEnum;
}
