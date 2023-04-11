import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetBatchRequest extends SpeakeasyBase {
    /**
     * Batch ID
     */
    id: string;
}
export declare class GetBatchResponse extends SpeakeasyBase {
    /**
     * OK
     */
    batch?: shared.Batch;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
