import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProtocolSshIpaliasListRequest extends SpeakeasyBase {
    /**
     * Agent to manipulate SSH IP alias
     */
    agentNum: number;
}
export declare class ProtocolSshIpaliasListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    ipAliases?: shared.IPAlias[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
