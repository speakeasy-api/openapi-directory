import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories. Can be one of: `all`, `selected`, or `private`.
 */
export declare enum ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all",
    Private = "private"
}
export declare class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
    /**
     * Name of the runner group.
     */
    name: string;
    /**
     * List of runner IDs to add to the runner group.
     */
    runners?: number[];
    /**
     * List of repository IDs that can access the runner group.
     */
    selectedRepositoryIds?: number[];
    /**
     * Visibility of a runner group. You can select all repositories, select individual repositories, or limit access to private repositories. Can be one of: `all`, `selected`, or `private`.
     */
    visibility?: ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}
export declare class ActionsCreateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
    requestBody: ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
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
