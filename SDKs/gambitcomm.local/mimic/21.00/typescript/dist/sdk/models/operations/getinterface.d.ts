import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetInterfaceRequest extends SpeakeasyBase {
    /**
     * Agent to return the primary interface
     */
    agentNum: number;
}
export declare class GetInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getInterface200ApplicationJSONString?: string;
}
