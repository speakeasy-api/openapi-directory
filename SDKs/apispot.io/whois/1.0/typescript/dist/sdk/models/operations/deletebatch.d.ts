import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteBatchRequest extends SpeakeasyBase {
    /**
     * Batch ID
     */
    id: string;
}
export declare class DeleteBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
