import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FromDelRequest extends SpeakeasyBase {
    /**
     * IP of the source
     */
    ip: string;
    /**
     * Agent to delete the IP source
     */
    agentNum: number;
    /**
     * port of the source
     */
    port: number;
}
export declare class FromDelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    fromDel200ApplicationJSONString?: string;
}
