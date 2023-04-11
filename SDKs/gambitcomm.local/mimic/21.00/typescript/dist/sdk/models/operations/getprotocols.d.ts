import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProtocolsRequest extends SpeakeasyBase {
    /**
     * Agent to return the protocols arrary
     */
    agentNum: number;
}
export declare class GetProtocolsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getProtocols200ApplicationJSONStrings?: string[];
}
