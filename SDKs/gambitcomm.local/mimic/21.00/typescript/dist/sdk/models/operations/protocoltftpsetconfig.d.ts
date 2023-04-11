import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to set the TFTP configuration
     */
    agentNum: number;
    /**
     * Parameter to set the TFTP configuration
     */
    argument: string;
    /**
     * Value to set the TFTP configuration
     */
    value: string;
}
export declare class ProtocolTftpSetConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSetConfig200ApplicationJSONString?: string;
}
