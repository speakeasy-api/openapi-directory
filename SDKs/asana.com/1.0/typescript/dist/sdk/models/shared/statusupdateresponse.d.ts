import { SpeakeasyBase } from "../../../internal/utils";
import { Like } from "./like";
import { UserCompact } from "./usercompact";
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export declare class StatusUpdateResponseParent extends SpeakeasyBase {
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
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The `resource_subtype`s for `status` objects represent the type of their parent.
 */
export declare enum StatusUpdateResponseResourceSubtypeEnum {
    ProjectStatusUpdate = "project_status_update",
    PortfolioStatusUpdate = "portfolio_status_update",
    GoalStatusUpdate = "goal_status_update"
}
/**
 * The type associated with the status update. This represents the current state of the object this object is on.
 */
export declare enum StatusUpdateResponseStatusTypeEnum {
    OnTrack = "on_track",
    AtRisk = "at_risk",
    OffTrack = "off_track",
    OnHold = "on_hold",
    Complete = "complete",
    Achieved = "achieved",
    Partial = "partial",
    Missed = "missed",
    Dropped = "dropped"
}
/**
 * A *status update* is an update on the progress of a particular project, portfolio, or goal, and is sent out to all of its parent's followers when created. These updates include both text describing the update and a `status_type` intended to represent the overall state of the project.
 */
export declare class StatusUpdateResponse extends SpeakeasyBase {
    author?: UserCompact;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    createdBy?: UserCompact;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Deprecated - please use liked instead* True if the status is hearted by the authorized user, false if not.
     */
    hearted?: boolean;
    /**
     * *Deprecated - please use likes instead* Array of likes for users who have hearted this status.
     */
    hearts?: Like[];
    /**
     * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
     */
    htmlText?: string;
    /**
     * True if the status is liked by the authorized user, false if not.
     */
    liked?: boolean;
    /**
     * Array of likes for users who have liked this status.
     */
    likes?: Like[];
    /**
     * The time at which this project status was last modified.
     *
     * @remarks
     * *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the status.*
     */
    modifiedAt?: Date;
    /**
     * *Deprecated - please use likes instead* The number of users who have hearted this status.
     */
    numHearts?: number;
    /**
     * The number of users who have liked this status.
     */
    numLikes?: number;
    parent?: StatusUpdateResponseParent;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The `resource_subtype`s for `status` objects represent the type of their parent.
     */
    resourceSubtype?: StatusUpdateResponseResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The type associated with the status update. This represents the current state of the object this object is on.
     */
    statusType: StatusUpdateResponseStatusTypeEnum;
    /**
     * The text content of the status update.
     */
    text: string;
    /**
     * The title of the status update.
     */
    title?: string;
}
