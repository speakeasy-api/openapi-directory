import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteWorkflowRunRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * The id of the workflow run.
     */
    runId: number;
}
export declare class ActionsDeleteWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
