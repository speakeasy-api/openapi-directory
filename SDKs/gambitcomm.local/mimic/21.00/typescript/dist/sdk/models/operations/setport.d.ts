import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetPortRequest extends SpeakeasyBase {
    /**
     * Agent to set the primary SNMP port
     */
    agentNum: number;
    /**
     * Primary SNMP port of the agent
     */
    port: number;
}
export declare class SetPortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setPort200ApplicationJSONString?: string;
}
