import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *project* represents a prioritized list of tasks in Asana or a board with columns of tasks represented as cards. It exists in a single workspace or organization and is accessible to a subset of users in that workspace or organization, depending on its permissions.
 */
export declare class ProjectBriefResponseProject extends SpeakeasyBase {
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
 * A *Project Brief* allows you to explain the what and why of the project to your team.
 */
export declare class ProjectBriefResponse extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * HTML formatted text for the project brief.
     */
    htmlText?: string;
    /**
     * A url that points directly to the object within Asana.
     */
    permalinkUrl?: string;
    project?: ProjectBriefResponseProject;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * [Opt In](/docs/input-output-options). The plain text of the project brief.
     */
    text?: string;
    /**
     * The title of the project brief.
     */
    title?: string;
}
