import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories.
 */
export declare enum ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all",
    Private = "private"
}
export declare class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
    /**
     * Whether the runner group can be used by `public` repositories.
     */
    allowsPublicRepositories?: boolean;
    /**
     * Name of the runner group.
     */
    name: string;
    /**
     * If `true`, the runner group will be restricted to running only the workflows specified in the `selected_workflows` array.
     */
    restrictedToWorkflows?: boolean;
    /**
     * List of runner IDs to add to the runner group.
     */
    runners?: number[];
    /**
     * List of repository IDs that can access the runner group.
     */
    selectedRepositoryIds?: number[];
    /**
     * List of workflows the runner group should be allowed to run. This setting will be ignored unless `restricted_to_workflows` is set to `true`.
     */
    selectedWorkflows?: string[];
    /**
     * Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories.
     */
    visibility?: ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}
export declare class ActionsCreateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
    requestBody: ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
    /**
     * The organization name. The name is not case sensitive.
     */
    org: string;
}
export declare class ActionsCreateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
