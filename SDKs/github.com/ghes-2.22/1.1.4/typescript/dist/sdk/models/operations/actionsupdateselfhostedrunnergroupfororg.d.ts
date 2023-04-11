import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Visibility of a runner group. You can select all repositories, select individual repositories, or all private repositories. Can be one of: `all`, `selected`, or `private`.
 */
export declare enum ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all",
    Private = "private"
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
    /**
     * Name of the runner group.
     */
    name: string;
    /**
     * Visibility of a runner group. You can select all repositories, select individual repositories, or all private repositories. Can be one of: `all`, `selected`, or `private`.
     */
    visibility?: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
    requestBody: ActionsUpdateSelfHostedRunnerGroupForOrgRequestBody;
    org: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class ActionsUpdateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
