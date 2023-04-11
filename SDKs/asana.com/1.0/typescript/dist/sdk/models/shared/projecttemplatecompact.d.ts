import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *project template* is an object that allows new projects to be created with a predefined setup, which may include tasks, sections, Rules, etc. It simplifies the process of running a workflow that involves a similar set of work every time.
 */
export declare class ProjectTemplateCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Name of the project template.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
