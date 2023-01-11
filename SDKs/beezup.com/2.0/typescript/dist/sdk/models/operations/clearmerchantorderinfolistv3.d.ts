import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClearMerchantOrderInfoListV3QueryParams extends SpeakeasyBase {
    testMode?: boolean;
}
export declare class ClearMerchantOrderInfoListV3Request extends SpeakeasyBase {
    queryParams: ClearMerchantOrderInfoListV3QueryParams;
    request: shared.ClearMerchantOrderInfoListRequest;
}
export declare class ClearMerchantOrderInfoListV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
