import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The color associated with the status update.
 */
export declare enum ProjectStatusRequestColorEnum {
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
export declare class ProjectStatusRequestInput extends SpeakeasyBase {
    /**
     * The color associated with the status update.
     */
    color: ProjectStatusRequestColorEnum;
    /**
     * [Opt In](/docs/input-output-options). The text content of the status update with formatting as HTML.
     */
    htmlText?: string;
    /**
     * The text content of the status update.
     */
    text: string;
    /**
     * The title of the project status update.
     */
    title?: string;
}
