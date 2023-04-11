import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsReRunWorkflowFailedJobsRequestBody extends SpeakeasyBase {
    /**
     * Whether to enable debug logging for the re-run.
     */
    enableDebugLogging?: boolean;
}
export declare class ActionsReRunWorkflowFailedJobsRequest extends SpeakeasyBase {
    requestBody?: ActionsReRunWorkflowFailedJobsRequestBody;
    /**
     * The account owner of the repository. The name is not case sensitive.
     */
    owner: string;
    /**
     * The name of the repository. The name is not case sensitive.
     */
    repo: string;
    /**
     * The unique identifier of the workflow run.
     */
    runId: number;
}
export declare class ActionsReRunWorkflowFailedJobsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    emptyObject?: Record<string, any>;
}
