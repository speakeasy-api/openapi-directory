import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetWriteCommunityRequest extends SpeakeasyBase {
    /**
     * Agent to return the SNMP write community string
     */
    agentNum: number;
}
export declare class GetWriteCommunityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getWriteCommunity200ApplicationJSONString?: string;
}
