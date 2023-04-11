import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetServerGetUsersRequest extends SpeakeasyBase {
    /**
     * Agent to show TELNET configuration
     */
    agentNum: number;
}
export declare class ProtocolTelnetServerGetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    telnetUsers?: shared.TelnetUser[];
}
