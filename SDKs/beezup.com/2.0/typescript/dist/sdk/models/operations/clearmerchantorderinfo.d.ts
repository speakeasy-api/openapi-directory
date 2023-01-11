import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClearMerchantOrderInfoPathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class ClearMerchantOrderInfoRequest extends SpeakeasyBase {
    pathParams: ClearMerchantOrderInfoPathParams;
}
export declare class ClearMerchantOrderInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
