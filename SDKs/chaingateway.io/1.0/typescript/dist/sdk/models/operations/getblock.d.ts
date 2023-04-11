import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBlockRequest extends SpeakeasyBase {
    /**
     * API Key
     */
    authorization: string;
    getBlockRequest: shared.GetBlockRequest;
}
export declare class GetBlockResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    getBlock?: shared.GetBlock;
}
