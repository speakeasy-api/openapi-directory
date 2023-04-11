import { SpeakeasyBase } from "../../../internal/utils";
import { UserCompact } from "./usercompact";
/**
 * The color associated with the status update.
 */
export declare enum ProjectStatusResponseColorEnum {
    Green = "green",
    Yellow = "yellow",
    Red = "red",
    Blue = "blue"
}
/**
 * *Deprecated: new integrations should prefer the `status_update` resource.*
 *
 * @remarks
 * A *project status* is an update on the progress of a particular project, and is sent out to all project followers when created. These updates include both text describing the update and a color code intended to represent the overall state of the project: "green" for projects that are on track, "yellow" for projects at risk, and "red" for projects that are behind.
 */
export declare class ProjectStatusResponse extends SpeakeasyBase {
    author?: UserCompact;
    /**
     * The color associated with the status update.
     */
    color: ProjectStatusResponseColorEnum;
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
     * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
     */
    htmlText?: string;
    /**
     * The time at which this project status was last modified.
     *
     * @remarks
     * *Note: This does not currently reflect any changes in associations such as comments that may have been added or removed from the project status.*
     */
    modifiedAt?: Date;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The text content of the status update.
     */
    text: string;
    /**
     * The title of the project status update.
     */
    title?: string;
}
