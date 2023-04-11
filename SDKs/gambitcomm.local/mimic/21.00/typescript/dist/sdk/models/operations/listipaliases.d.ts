import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListIpaliasesRequest extends SpeakeasyBase {
    /**
     * Agent to show the IP alias list
     */
    agentNum: number;
}
export declare class ListIpaliasesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    ipAliases?: shared.IPAlias[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
