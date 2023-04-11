import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDeleteWorkflowRunLogsRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * The id of the workflow run.
     */
    runId: number;
}
export declare class ActionsDeleteWorkflowRunLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
