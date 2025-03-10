import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest extends SpeakeasyBase {
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
    /**
     * The unique identifier of the repository.
     */
    repositoryId: number;
}
export declare class ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
