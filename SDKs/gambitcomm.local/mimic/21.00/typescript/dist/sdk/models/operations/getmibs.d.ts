import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMibsRequest extends SpeakeasyBase {
    /**
     * Agent to return the MIB triplets
     */
    agentNum: number;
}
export declare class GetMibsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    triplets?: shared.Triplet[];
}
