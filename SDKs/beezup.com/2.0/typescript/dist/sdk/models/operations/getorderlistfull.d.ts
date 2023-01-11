import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderListFullHeaders extends SpeakeasyBase {
    acceptEncoding: string[];
}
export declare class GetOrderListFullRequest extends SpeakeasyBase {
    headers: GetOrderListFullHeaders;
    request: shared.OrderListRequest;
}
export declare class GetOrderListFullResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    orderListFull?: shared.OrderListFull;
}
