import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SubmitBatchRequest extends SpeakeasyBase {
    batchUuid: string;
}
export declare class SubmitBatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
