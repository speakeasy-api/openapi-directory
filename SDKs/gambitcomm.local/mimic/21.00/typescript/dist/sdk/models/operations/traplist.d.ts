import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TrapListRequest extends SpeakeasyBase {
    /**
     * Agent to list the traps
     */
    agentNum: number;
}
export declare class TrapListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    trapList200ApplicationJSONStrings?: string[];
}
