import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetMerchantOrderInfoListRequest extends SpeakeasyBase {
    request: shared.SetMerchantOrderInfoListRequest;
}
export declare class SetMerchantOrderInfoListResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
}
