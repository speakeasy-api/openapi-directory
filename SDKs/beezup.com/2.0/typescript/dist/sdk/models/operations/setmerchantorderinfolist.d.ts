import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetMerchantOrderInfoListResponse extends SpeakeasyBase {
    /**
     * Requested too many batch operations
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Succesfully received and processed batched operations. Please check response to see the status per operation.
     */
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
}
