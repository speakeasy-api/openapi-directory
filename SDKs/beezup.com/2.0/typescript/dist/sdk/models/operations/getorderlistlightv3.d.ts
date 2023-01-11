import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderListLightV3Request extends SpeakeasyBase {
    request: shared.OrderListRequest;
}
export declare class GetOrderListLightV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    orderListLightWithLinks?: shared.OrderListLightWithLinks;
}
