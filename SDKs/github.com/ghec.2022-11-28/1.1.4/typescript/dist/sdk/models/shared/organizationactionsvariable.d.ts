import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Visibility of a variable
 */
export declare enum OrganizationActionsVariableVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
/**
 * Organization variable for GitHub Actions.
 */
export declare class OrganizationActionsVariable extends SpeakeasyBase {
    /**
     * The date and time at which the variable was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    createdAt: Date;
    /**
     * The name of the variable.
     */
    name: string;
    selectedRepositoriesUrl?: string;
    /**
     * The date and time at which the variable was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    updatedAt: Date;
    /**
     * The value of the variable.
     */
    value: string;
    /**
     * Visibility of a variable
     */
    visibility: OrganizationActionsVariableVisibilityEnum;
}
