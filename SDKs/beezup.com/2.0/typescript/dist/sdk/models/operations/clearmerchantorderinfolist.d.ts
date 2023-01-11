import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClearMerchantOrderInfoListRequest extends SpeakeasyBase {
    request: shared.ClearMerchantOrderInfoListRequest;
}
export declare class ClearMerchantOrderInfoListResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
}
