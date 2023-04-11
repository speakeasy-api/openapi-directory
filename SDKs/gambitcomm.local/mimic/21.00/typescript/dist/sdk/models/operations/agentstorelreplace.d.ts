import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AgentStoreLreplaceRequest extends SpeakeasyBase {
    /**
     * Value
     */
    requestBody?: string;
    /**
     * Agent of the value space
     */
    agentNum: number;
    /**
     * Index
     */
    index: number;
    /**
     * Variable name
     */
    var: string;
}
export declare class AgentStoreLreplaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    agentStoreLreplace200ApplicationJSONString?: string;
}
