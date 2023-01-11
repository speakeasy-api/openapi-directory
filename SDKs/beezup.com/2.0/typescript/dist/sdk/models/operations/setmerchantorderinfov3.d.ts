import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetMerchantOrderInfoV3PathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class SetMerchantOrderInfoV3QueryParams extends SpeakeasyBase {
    testMode?: boolean;
}
export declare class SetMerchantOrderInfoV3Request extends SpeakeasyBase {
    pathParams: SetMerchantOrderInfoV3PathParams;
    queryParams: SetMerchantOrderInfoV3QueryParams;
    request: shared.SetMerchantOrderInfoRequest;
}
export declare class SetMerchantOrderInfoV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
