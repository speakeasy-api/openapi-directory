import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 */
export declare enum GoalRelationshipCompactResourceSubtypeEnum {
    Subgoal = "subgoal",
    SupportingWork = "supporting_work"
}
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export declare class GoalRelationshipCompactSupportingResource extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *goal relationship* is an object representing the relationship between a goal and another goal, a project, or a portfolio.
 */
export declare class GoalRelationshipCompact extends SpeakeasyBase {
    /**
     * The weight that the supporting resource's progress contributes to the supported goal's progress. This can only be 0 or 1.
     */
    contributionWeight?: number;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    resourceSubtype?: GoalRelationshipCompactResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    supportingResource?: GoalRelationshipCompactSupportingResource;
}
