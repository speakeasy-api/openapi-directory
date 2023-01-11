import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderListLightRequest extends SpeakeasyBase {
    request: shared.OrderListRequest;
}
export declare class GetOrderListLightResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    orderListLight?: shared.OrderListLight;
}
