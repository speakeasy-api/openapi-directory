import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolCoapGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the COAP argument structure
     */
    agentNum: number;
}
export declare class ProtocolCoapGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolCoapGetArgs200ApplicationJSONObject?: Record<string, any>;
}
