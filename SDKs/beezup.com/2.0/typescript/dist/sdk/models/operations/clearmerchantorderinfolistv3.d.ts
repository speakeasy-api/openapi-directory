import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClearMerchantOrderInfoListV3Request extends SpeakeasyBase {
    clearMerchantOrderInfoListRequest: shared.ClearMerchantOrderInfoListRequest;
    /**
     * If true, the operation will be not be sent to marketplace. But the validation will be taken in account.
     */
    testMode?: boolean;
}
export declare class ClearMerchantOrderInfoListV3Response extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Succesfully received and processed batched operations. Please check response to see the status per operation.
     */
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
    /**
     * Requested too many batch operations
     */
    errorResponseMessage?: shared.ErrorResponseMessage;
}
