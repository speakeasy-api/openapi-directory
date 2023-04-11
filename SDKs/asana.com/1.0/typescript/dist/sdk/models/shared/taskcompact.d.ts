import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
 *
 * @remarks
 * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
 */
export declare enum TaskCompactResourceSubtypeEnum {
    DefaultTask = "default_task",
    Milestone = "milestone",
    Section = "section",
    Approval = "approval"
}
/**
 * The *task* is the basic object around which many operations in Asana are centered.
 */
export declare class TaskCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the task.
     */
    name?: string;
    /**
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     *
     * @remarks
     * The resource_subtype `milestone` represent a single moment in time. This means tasks with this subtype cannot have a start_date.
     */
    resourceSubtype?: TaskCompactResourceSubtypeEnum;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
