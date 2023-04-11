import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetServerGetStateRequest extends SpeakeasyBase {
    /**
     * Agent to show TELNET statistics
     */
    agentNum: number;
}
export declare class ProtocolTelnetServerGetStateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTelnetServerGetState200ApplicationJSONInt32Integers?: number[];
}
