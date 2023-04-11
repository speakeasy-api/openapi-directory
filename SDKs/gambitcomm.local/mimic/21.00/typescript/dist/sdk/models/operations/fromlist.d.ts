import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FromListRequest extends SpeakeasyBase {
    /**
     * Agent to show the IP sources
     */
    agentNum: number;
}
export declare class FromListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    ipSources?: shared.IPSource[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
