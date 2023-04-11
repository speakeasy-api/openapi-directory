import { SpeakeasyBase } from "../../../internal/utils";
export declare class DateVariableCompact extends SpeakeasyBase {
    /**
     * The description of what the date variable is used for when instantiating a project.
     */
    description?: string;
    /**
     * Globally unique identifier of the date field in the project template. A value of `1` refers to the project start date, while `2` refers to the project due date.
     */
    gid?: string;
    /**
     * The name of the date variable.
     */
    name?: string;
}
