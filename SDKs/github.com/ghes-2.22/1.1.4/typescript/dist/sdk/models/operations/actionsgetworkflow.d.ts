import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ActionsGetWorkflowRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * The ID of the workflow. You can also pass the workflow file name as a string.
     */
    workflowId: any;
}
export declare class ActionsGetWorkflowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    workflow?: shared.Workflow;
}
