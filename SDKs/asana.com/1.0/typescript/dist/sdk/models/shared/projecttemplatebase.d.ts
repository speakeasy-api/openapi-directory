import { SpeakeasyBase } from "../../../internal/utils";
import { DateVariableCompact } from "./datevariablecompact";
import { TeamCompact } from "./teamcompact";
/**
 * Color of the project template.
 */
export declare enum ProjectTemplateBaseColorEnum {
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
 * A *user* object represents an account in Asana that can be given access to various workspaces, projects, and tasks.
 */
export declare class ProjectTemplateBaseOwner extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * *Read-only except when same user as requester*. The user’s name.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * A *project template* is an object that allows new projects to be created with a predefined setup, which may include tasks, sections, Rules, etc. It simplifies the process of running a workflow that involves a similar set of work every time.
 */
export declare class ProjectTemplateBase extends SpeakeasyBase {
    /**
     * Color of the project template.
     */
    color?: ProjectTemplateBaseColorEnum;
    /**
     * Free-form textual information associated with the project template
     */
    description?: string;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The description of the project template with formatting as HTML.
     */
    htmlDescription?: string;
    /**
     * Name of the project template.
     */
    name?: string;
    /**
     * The current owner of the project template, may be null.
     */
    owner?: ProjectTemplateBaseOwner;
    /**
     * True if the project template is public to its team.
     */
    public?: boolean;
    /**
     * Array of date variables in this project template. Calendar dates must be provided for these variables when instantiating a project.
     */
    requestedDates?: DateVariableCompact[];
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    team?: TeamCompact;
}
