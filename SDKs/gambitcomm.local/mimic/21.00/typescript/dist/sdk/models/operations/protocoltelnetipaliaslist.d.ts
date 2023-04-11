import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolTelnetIpaliasListRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate TELNET IP alias
     */
    agentNum: number;
}
export declare class ProtocolTelnetIpaliasListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    ipAliases?: shared.IPAlias[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
