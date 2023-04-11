import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteBankTransferBatchPaymentRequest extends SpeakeasyBase {
    batchUuid: string;
    itemUuid: string;
}
export declare class DeleteBankTransferBatchPaymentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
