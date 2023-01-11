import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ClearMerchantOrderInfoV3PathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class ClearMerchantOrderInfoV3QueryParams extends SpeakeasyBase {
    testMode?: boolean;
}
export declare class ClearMerchantOrderInfoV3Request extends SpeakeasyBase {
    pathParams: ClearMerchantOrderInfoV3PathParams;
    queryParams: ClearMerchantOrderInfoV3QueryParams;
}
export declare class ClearMerchantOrderInfoV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
