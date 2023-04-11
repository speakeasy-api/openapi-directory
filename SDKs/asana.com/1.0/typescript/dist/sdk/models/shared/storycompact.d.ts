import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
/**
 * A story represents an activity associated with an object in the Asana system.
 */
export declare class StoryCompact extends SpeakeasyBase {
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
     * The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning.
     */
    resourceSubtype?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * *Create-only*. Human-readable text for the story or comment.
     *
     * @remarks
     * This will not include the name of the creator.
     * *Note: This is not guaranteed to be stable for a given type of story. For example, text for a reassignment may not always say “assigned to …” as the text for a story can both be edited and change based on the language settings of the user making the request.*
     * Use the `resource_subtype` property to discover the action that created the story.
     */
    text?: string;
}
