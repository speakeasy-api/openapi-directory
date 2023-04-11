import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetReadCommunityRequest extends SpeakeasyBase {
    /**
     * Agent to return the SNMP read community string
     */
    agentNum: number;
}
export declare class GetReadCommunityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getReadCommunity200ApplicationJSONString?: string;
}
