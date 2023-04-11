import { SpeakeasyBase } from "../../../internal/utils";
export declare class GoalAddSupportingRelationshipRequest extends SpeakeasyBase {
    /**
     * The weight that the supporting resource's progress will contribute to the supported goal's progress. This can only be 0 or 1.
     */
    contributionWeight?: number;
    /**
     * An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.
     */
    insertAfter?: string;
    /**
     * An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. `insert_before` and `insert_after` parameters cannot both be specified. Currently only supported when adding a subgoal.
     */
    insertBefore?: string;
    /**
     * The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, or portfolio.
     */
    supportingResource: string;
}
