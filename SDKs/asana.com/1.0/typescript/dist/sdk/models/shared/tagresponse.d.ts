import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact, WorkspaceCompactInput } from "./workspacecompact";
/**
 * Color of the tag.
 */
export declare enum TagResponseColorEnum {
    DarkPink = "dark-pink",
    DarkGreen = "dark-green",
    DarkBlue = "dark-blue",
    DarkRed = "dark-red",
    DarkTeal = "dark-teal",
    DarkBrown = "dark-brown",
    DarkOrange = "dark-orange",
    DarkPurple = "dark-purple",
    DarkWarmGray = "dark-warm-gray",
    LightPink = "light-pink",
    LightGreen = "light-green",
    LightBlue = "light-blue",
    LightRed = "light-red",
    LightTeal = "light-teal",
    LightBrown = "light-brown",
    LightOrange = "light-orange",
    LightPurple = "light-purple",
    LightWarmGray = "light-warm-gray"
}
/**
 * A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
 */
export declare class TagResponse extends SpeakeasyBase {
    /**
     * Color of the tag.
     */
    color?: TagResponseColorEnum;
    /**
     * The time at which this resource was created.
     */
    createdAt?: Date;
    /**
     * Array of users following this tag.
     */
    followers?: UserCompact[];
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * Free-form textual information associated with the tag (i.e. its description).
     */
    notes?: string;
    /**
     * A url that points directly to the object within Asana.
     */
    permalinkUrl?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    workspace?: WorkspaceCompact;
}
/**
 * A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
 */
export declare class TagResponseInput extends SpeakeasyBase {
    /**
     * Color of the tag.
     */
    color?: TagResponseColorEnum;
    /**
     * Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * Free-form textual information associated with the tag (i.e. its description).
     */
    notes?: string;
    workspace?: WorkspaceCompactInput;
}
