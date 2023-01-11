import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderHistoryV3PathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class GetOrderHistoryV3Request extends SpeakeasyBase {
    pathParams: GetOrderHistoryV3PathParams;
}
export declare class GetOrderHistoryV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    orderHistory?: shared.OrderHistory;
}
