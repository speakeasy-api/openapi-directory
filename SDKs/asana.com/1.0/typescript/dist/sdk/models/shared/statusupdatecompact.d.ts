import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The `resource_subtype`s for `status` objects represent the type of their parent.
 */
export declare enum StatusUpdateCompactResourceSubtypeEnum {
    ProjectStatusUpdate = "project_status_update",
    PortfolioStatusUpdate = "portfolio_status_update",
    GoalStatusUpdate = "goal_status_update"
}
/**
 * A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent's followers when created. These updates include both text describing the update and a `status_type` intended to represent the overall state of the project.
 */
export declare class StatusUpdateCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The `resource_subtype`s for `status` objects represent the type of their parent.
     */
    resourceSubtype?: StatusUpdateCompactResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The title of the status update.
     */
    title?: string;
}
