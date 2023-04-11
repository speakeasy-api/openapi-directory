import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetMibsRequest extends SpeakeasyBase {
    requestBody: shared.Triplet[];
    /**
     * Agent to return the MIB triplets
     */
    agentNum: number;
}
export declare class SetMibsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    setMibs200ApplicationJSONString?: string;
}
