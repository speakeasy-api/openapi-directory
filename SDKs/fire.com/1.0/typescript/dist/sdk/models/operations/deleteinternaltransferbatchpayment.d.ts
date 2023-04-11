import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteInternalTransferBatchPaymentRequest extends SpeakeasyBase {
    batchUuid: string;
    itemUuid: string;
}
export declare class DeleteInternalTransferBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
