import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderPathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class GetOrderHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetOrderRequest extends SpeakeasyBase {
    pathParams: GetOrderPathParams;
    headers: GetOrderHeaders;
}
export declare class GetOrderResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    order?: shared.Order;
}
