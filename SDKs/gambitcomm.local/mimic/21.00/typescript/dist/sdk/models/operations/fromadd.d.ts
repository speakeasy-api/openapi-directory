import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FromAddRequest extends SpeakeasyBase {
    /**
     * IP of the port, 0.0.0.0 for any
     */
    ip: string;
    /**
     * Agent to add the IP source
     */
    agentNum: number;
    /**
     * port of the source, 0 for any
     */
    port: number;
}
export declare class FromAddResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    fromAdd200ApplicationJSONString?: string;
}
