import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolTftpGetConfigRequest extends SpeakeasyBase {
    /**
     * Agent to show the TFTP configuration
     */
    agentNum: number;
}
export declare class ProtocolTftpGetConfigResponse extends SpeakeasyBase {
    /**
     * successful operation
     */
    configTFTP?: shared.ConfigTFTP;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
