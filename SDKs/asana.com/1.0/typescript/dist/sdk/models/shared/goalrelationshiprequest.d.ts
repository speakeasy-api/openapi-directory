import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export declare class GoalRelationshipRequestSupportedGoalOwnerInput extends SpeakeasyBase {
    /**
     * *Read-only except when same user as requester*. The user’s name.
     */
    name?: string;
}
/**
 * A generic Asana Resource, containing a globally unique identifier.
 */
export declare class GoalRelationshipRequestSupportedGoalInput extends SpeakeasyBase {
    /**
     * The name of the goal.
     */
    name?: string;
    owner?: GoalRelationshipRequestSupportedGoalOwnerInput;
}
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export declare class GoalRelationshipRequestSupportingResourceInput extends SpeakeasyBase {
    /**
     * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
}
/**
 * A *goal relationship* is an object representing the relationship between a goal and another goal, a project, or a portfolio.
 */
export declare class GoalRelationshipRequestInput extends SpeakeasyBase {
    /**
     * The weight that the supporting resource's progress contributes to the supported goal's progress. This can only be 0 or 1.
     */
    contributionWeight?: number;
    supportedGoal?: GoalRelationshipRequestSupportedGoalInput;
    supportingResource?: GoalRelationshipRequestSupportingResourceInput;
}
