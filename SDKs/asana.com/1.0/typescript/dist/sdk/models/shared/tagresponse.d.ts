import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
import { WorkspaceCompact } from "./workspacecompact";
import { WorkspaceCompactInput } from "./workspacecompact";
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
**/
export declare class TagResponse extends SpeakeasyBase {
    color?: TagResponseColorEnum;
    followers?: UserCompact[];
    gid?: string;
    name?: string;
    permalinkUrl?: string;
    resourceType?: string;
    workspace?: WorkspaceCompact;
}
/**
 * A *tag* is a label that can be attached to any task in Asana. It exists in a single workspace or organization.
**/
export declare class TagResponseInput extends SpeakeasyBase {
    color?: TagResponseColorEnum;
    name?: string;
    workspace?: WorkspaceCompactInput;
}
