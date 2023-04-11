import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.
 */
export declare enum ActionsUpdateOrgVariableRequestBodyVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
export declare class ActionsUpdateOrgVariableRequestBody extends SpeakeasyBase {
    /**
     * The name of the variable.
     */
    name?: string;
    /**
     * An array of repository ids that can access the organization variable. You can only provide a list of repository ids when the `visibility` is set to `selected`.
     */
    selectedRepositoryIds?: number[];
    /**
     * The value of the variable.
     */
    value?: string;
    /**
     * The type of repositories in the organization that can access the variable. `selected` means only the repositories specified by `selected_repository_ids` can access the variable.
     */
    visibility?: ActionsUpdateOrgVariableRequestBodyVisibilityEnum;
}
export declare class ActionsUpdateOrgVariableRequest extends SpeakeasyBase {
    requestBody: ActionsUpdateOrgVariableRequestBody;
    /**
     * The name of the variable.
     */
    name: string;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ActionsUpdateOrgVariableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
