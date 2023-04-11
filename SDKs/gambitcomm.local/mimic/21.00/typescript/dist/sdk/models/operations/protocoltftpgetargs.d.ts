import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpGetArgsRequest extends SpeakeasyBase {
    /**
     * Agent to show the TFTP argument structure
     */
    agentNum: number;
}
export declare class ProtocolTftpGetArgsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpGetArgs200ApplicationJSONObject?: Record<string, any>;
}
