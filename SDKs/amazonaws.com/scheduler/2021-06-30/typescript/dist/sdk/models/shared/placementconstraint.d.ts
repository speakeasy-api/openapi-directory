import { SpeakeasyBase } from "../../../internal/utils";
import { PlacementConstraintTypeEnum } from "./placementconstrainttypeenum";
/**
 * An object representing a constraint on task placement.
 */
export declare class PlacementConstraint extends SpeakeasyBase {
    expression?: string;
    type?: PlacementConstraintTypeEnum;
}
