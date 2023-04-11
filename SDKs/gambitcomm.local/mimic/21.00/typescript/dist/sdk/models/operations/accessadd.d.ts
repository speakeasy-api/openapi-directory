import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AccessAddRequest extends SpeakeasyBase {
    /**
     * Agent range in minimal range representation
     */
    agents: string;
    /**
     * Currently not used
     */
    mask: string;
    /**
     * Username of the simulator hosting system
     */
    user: string;
}
export declare class AccessAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    accessAdd200ApplicationJSONString?: string;
}
