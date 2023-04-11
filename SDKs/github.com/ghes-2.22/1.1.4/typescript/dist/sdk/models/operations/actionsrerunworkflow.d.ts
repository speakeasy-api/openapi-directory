import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ActionsReRunWorkflowRequest extends SpeakeasyBase {
    owner: string;
    repo: string;
    /**
     * The id of the workflow run.
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
    actionsReRunWorkflow201ApplicationJSONObject?: Record<string, any>;
}
