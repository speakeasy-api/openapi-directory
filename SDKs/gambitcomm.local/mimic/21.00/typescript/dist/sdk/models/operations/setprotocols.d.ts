import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SetProtocolsRequest extends SpeakeasyBase {
    /**
     * Created agent object
     */
    requestBody: string[];
    /**
     * Agent to return the protocols arrary
     */
    agentNum: number;
}
export declare class SetProtocolsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setProtocols200ApplicationJSONStringIntegers?: number[];
}
