import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetJobForWorkflowRunRequest extends SpeakeasyBase {
    /**
     * job_id parameter
     */
    jobId: number;
    owner: string;
    repo: string;
}
export declare class ActionsGetJobForWorkflowRunResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    job?: shared.Job;
}
