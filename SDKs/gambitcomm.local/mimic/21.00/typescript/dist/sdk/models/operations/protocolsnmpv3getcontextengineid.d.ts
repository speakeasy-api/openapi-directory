import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmpv3GetContextEngineidRequest extends SpeakeasyBase {
    /**
     * Agent to show the SNMPv3 engine
     */
    agentNum: number;
}
export declare class ProtocolSnmpv3GetContextEngineidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolSnmpv3GetContextEngineid200ApplicationJSONString?: string;
}
