import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SplitOidRequest extends SpeakeasyBase {
    /**
     * OID
     */
    oid: string;
    /**
     * Agent of the value space
     */
    agentNum: number;
}
export declare class SplitOidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    splitOid200ApplicationJSONStrings?: string[];
}
