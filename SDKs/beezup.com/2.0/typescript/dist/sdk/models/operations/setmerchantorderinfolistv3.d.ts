import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetMerchantOrderInfoListV3QueryParams extends SpeakeasyBase {
    testMode?: boolean;
}
export declare class SetMerchantOrderInfoListV3Request extends SpeakeasyBase {
    queryParams: SetMerchantOrderInfoListV3QueryParams;
    request: shared.SetMerchantOrderInfoListRequest;
}
export declare class SetMerchantOrderInfoListV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
