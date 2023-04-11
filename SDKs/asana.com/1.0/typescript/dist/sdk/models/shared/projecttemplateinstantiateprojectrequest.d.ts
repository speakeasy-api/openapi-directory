import { SpeakeasyBase } from "../../../internal/utils";
import { DateVariableRequest } from "./datevariablerequest";
export declare class ProjectTemplateInstantiateProjectRequest extends SpeakeasyBase {
    /**
     * *Optional*. If set to `true`, the endpoint returns an "Unprocessable Entity" error if you fail to provide a calendar date value for any date variable. If set to `false`, a default date is used for each unfulfilled date variable (e.g., the current date is used as the Start Date of a project).
     */
    isStrict?: boolean;
    /**
     * The name of the new project.
     */
    name: string;
    /**
     * Sets the project to public to its team.
     */
    public: boolean;
    /**
     * Array of mappings of date variables to calendar dates.
     */
    requestedDates?: DateVariableRequest[];
    /**
     * *Conditional*. Sets the team of the new project. If the project template exists in an _organization_, you must specify a value for `team` and not `workspace`.
     */
    team?: string;
    /**
     * *Conditional*. Sets the workspace of the new project. If the project template exists in a _workspace_, you must specify a value for `workspace` and not `team`.
     */
    workspace?: string;
}
