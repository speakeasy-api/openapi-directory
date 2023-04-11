import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
 */
export declare class TagCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
