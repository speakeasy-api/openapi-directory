import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderHistoryPathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class GetOrderHistoryHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetOrderHistoryRequest extends SpeakeasyBase {
    pathParams: GetOrderHistoryPathParams;
    headers: GetOrderHistoryHeaders;
}
export declare class GetOrderHistoryResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    orderHistory?: shared.OrderHistory;
}
