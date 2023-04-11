import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSnmptcpIpaliasListRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate SNMPTCP IP alias
     */
    agentNum: number;
}
export declare class ProtocolSnmptcpIpaliasListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    ipAliases?: shared.IPAlias[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
