import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetReadCommunityRequest extends SpeakeasyBase {
    /**
     * Agent to return the SNMP read community string
     */
    agentNum: number;
    /**
     * SNMP read community string
     */
    read: string;
}
export declare class SetReadCommunityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setReadCommunity200ApplicationJSONString?: string;
}
