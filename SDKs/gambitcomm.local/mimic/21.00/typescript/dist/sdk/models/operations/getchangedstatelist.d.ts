import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChangedStateListResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    agentStates?: shared.AgentState[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
