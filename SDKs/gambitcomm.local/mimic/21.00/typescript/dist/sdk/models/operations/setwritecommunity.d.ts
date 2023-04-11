import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetWriteCommunityRequest extends SpeakeasyBase {
    /**
     * Agent to set the SNMP write community string
     */
    agentNum: number;
    /**
     * SNMP write community string
     */
    write: string;
}
export declare class SetWriteCommunityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setWriteCommunity200ApplicationJSONString?: string;
}
