import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetPdusizeRequest extends SpeakeasyBase {
    /**
     * Agent to return the PDU size
     */
    agentNum: number;
    /**
     * PDU size setting for the agent
     */
    pdusize: number;
}
export declare class SetPdusizeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setPdusize200ApplicationJSONInt32Integer?: number;
}
