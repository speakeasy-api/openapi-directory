import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TrapConfigListRequest extends SpeakeasyBase {
    /**
     * Agent to show the IP alias list
     */
    agentNum: number;
}
export declare class TrapConfigListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    trapDests?: shared.TrapDest[];
}
