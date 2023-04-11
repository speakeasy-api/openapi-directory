import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpSessionGetParameterRequest extends SpeakeasyBase {
    /**
     * Agent to show TFTP parameter
     */
    agentNum: number;
    /**
     * Parameter to show
     */
    parameter: string;
    /**
     * SessionID
     */
    sessionID: string;
}
export declare class ProtocolTftpSessionGetParameterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    protocolTftpSessionGetParameter200ApplicationJSONString?: string;
}
