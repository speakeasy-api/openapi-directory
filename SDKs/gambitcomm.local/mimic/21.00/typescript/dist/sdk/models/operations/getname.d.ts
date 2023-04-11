import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetNameRequest extends SpeakeasyBase {
    /**
     * OID
     */
    oid: string;
    /**
     * Agent to show the object
     */
    agentNum: number;
}
export declare class GetNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getName200ApplicationJSONString?: string;
}
