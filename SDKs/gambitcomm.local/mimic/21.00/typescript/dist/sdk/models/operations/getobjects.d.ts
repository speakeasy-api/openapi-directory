import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetObjectsRequest extends SpeakeasyBase {
    /**
     * Current OID
     */
    oid: string;
    /**
     * Agent to show the OID branches
     */
    agentNum: number;
}
export declare class GetObjectsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getObjects200ApplicationJSONStrings?: string[];
}
