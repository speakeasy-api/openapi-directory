import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSessionSetParameterRequest extends SpeakeasyBase {
    /**
     * Agent to set TFTP parameter
     */
    agentNum: number;
    /**
     * Parameter to set
     */
    parameter: string;
    /**
     * SessionID
     */
    sessionID: string;
    /**
     * Value to set
     */
    value: string;
}
export declare class ProtocolTftpSessionSetParameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSessionSetParameter200ApplicationJSONString?: string;
}
