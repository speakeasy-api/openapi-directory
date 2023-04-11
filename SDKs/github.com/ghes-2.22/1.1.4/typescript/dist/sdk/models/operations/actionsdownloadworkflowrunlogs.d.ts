import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsDownloadWorkflowRunLogsRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * The id of the workflow run.
     */
    runId: number;
}
export declare class ActionsDownloadWorkflowRunLogsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
