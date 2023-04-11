import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTodGettimeRequest extends SpeakeasyBase {
    /**
     * Agent to show TOD return
     */
    agentNum: number;
    /**
     * numRetries
     */
    numRetries: number;
    /**
     * portNum
     */
    portNum: number;
    /**
     * scriptName
     */
    scriptName: string;
    /**
     * serverAddr
     */
    serverAddr: string;
    /**
     * timeSec
     */
    timeSec: number;
}
export declare class ProtocolTodGettimeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTodGettime200ApplicationJSONStrings?: string[];
}
