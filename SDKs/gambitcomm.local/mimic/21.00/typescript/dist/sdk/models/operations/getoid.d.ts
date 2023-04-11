import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOidRequest extends SpeakeasyBase {
    /**
     * Agent to show the OID
     */
    agentNum: number;
    /**
     * Object
     */
    object: string;
}
export declare class GetOidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getOid200ApplicationJSONString?: string;
}
