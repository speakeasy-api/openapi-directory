import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoalRemoveSupportingRelationshipRequest extends SpeakeasyBase {
    /**
     * The gid of the supporting resource to remove from the parent goal. Must be the gid of a goal, project, or portfolio.
     */
    supportingResource: string;
}
