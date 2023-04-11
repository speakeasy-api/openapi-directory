import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AgentStoreListRequest extends SpeakeasyBase {
    /**
     * Agent of the value space
     */
    agentNum: number;
}
export declare class AgentStoreListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    agentStoreList200ApplicationJSONStrings?: string[];
}
