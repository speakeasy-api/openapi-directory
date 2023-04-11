import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetPortRequest extends SpeakeasyBase {
    /**
     * Agent to return the primary SNMP port
     */
    agentNum: number;
}
export declare class GetPortResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getPort200ApplicationJSONString?: string;
}
