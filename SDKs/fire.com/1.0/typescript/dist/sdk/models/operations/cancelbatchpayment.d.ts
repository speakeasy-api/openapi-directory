import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CancelBatchPaymentRequest extends SpeakeasyBase {
    batchUuid: string;
}
export declare class CancelBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
