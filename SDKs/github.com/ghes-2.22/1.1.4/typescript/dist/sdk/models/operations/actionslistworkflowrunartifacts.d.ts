import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsListWorkflowRunArtifactsRequest extends SpeakeasyBase {
    owner: string;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * Results per page (max 100)
     */
    perPage?: number;
    repo: string;
    /**
     * The id of the workflow run.
     */
    runId: number;
}
/**
 * Response
 */
export declare class ActionsListWorkflowRunArtifacts200ApplicationJSON extends SpeakeasyBase {
    artifacts: shared.Artifact[];
    totalCount: number;
}
export declare class ActionsListWorkflowRunArtifactsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    actionsListWorkflowRunArtifacts200ApplicationJSONObject?: ActionsListWorkflowRunArtifacts200ApplicationJSON;
}
