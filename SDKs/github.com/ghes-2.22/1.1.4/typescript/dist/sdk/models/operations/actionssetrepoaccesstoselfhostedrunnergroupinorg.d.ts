import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody extends SpeakeasyBase {
    /**
     * List of repository IDs that can access the runner group.
     */
    selectedRepositoryIds: number[];
}
export declare class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
    requestBody: ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody;
    org: string;
    /**
     * Unique identifier of the self-hosted runner group.
     */
    runnerGroupId: number;
}
export declare class ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
