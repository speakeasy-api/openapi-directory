import { SpeakeasyBase } from "../../../internal/utils";
/**
 * *Deprecated: new integrations should prefer the `status_update` resource.*
 *
 * @remarks
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
 */
export declare class ProjectStatusCompact extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The title of the project status update.
     */
    title?: string;
}
