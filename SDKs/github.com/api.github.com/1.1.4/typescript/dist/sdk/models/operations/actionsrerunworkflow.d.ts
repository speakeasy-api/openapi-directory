import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsReRunWorkflowRequestBody extends SpeakeasyBase {
    /**
     * Whether to enable debug logging for the re-run.
     */
    enableDebugLogging?: boolean;
}
export declare class ActionsReRunWorkflowRequest extends SpeakeasyBase {
    requestBody?: ActionsReRunWorkflowRequestBody;
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
export declare class ActionsReRunWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    emptyObject?: Record<string, any>;
}
