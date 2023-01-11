import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderListFullV3Headers extends SpeakeasyBase {
    acceptEncoding: string;
}
export declare class GetOrderListFullV3Request extends SpeakeasyBase {
    headers: GetOrderListFullV3Headers;
    request: shared.OrderListRequest;
}
export declare class GetOrderListFullV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    orderListFullWithLinks?: shared.OrderListFullWithLinks;
}
