import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Color of the tag.
 */
export declare enum TagRequestColorEnum {
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
export declare class TagRequestInput extends SpeakeasyBase {
    /**
     * Color of the tag.
     */
    color?: TagRequestColorEnum;
    /**
     * An array of strings identifying users. These can either be the string "me", an email, or the gid of a user.
     */
    followers?: string[];
    /**
     * Name of the tag. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer.
     */
    name?: string;
    /**
     * Free-form textual information associated with the tag (i.e. its description).
     */
    notes?: string;
    /**
     * Gid of an object.
     */
    workspace?: string;
}
