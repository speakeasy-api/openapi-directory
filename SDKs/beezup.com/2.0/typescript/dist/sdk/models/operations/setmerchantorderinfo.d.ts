import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetMerchantOrderInfoPathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class SetMerchantOrderInfoRequest extends SpeakeasyBase {
    pathParams: SetMerchantOrderInfoPathParams;
    request: shared.SetMerchantOrderInfoRequest;
}
export declare class SetMerchantOrderInfoResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
