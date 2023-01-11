import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderV3PathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class GetOrderV3Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetOrderV3Request extends SpeakeasyBase {
    pathParams: GetOrderV3PathParams;
    headers: GetOrderV3Headers;
}
export declare class GetOrderV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    orderWithLinks?: shared.OrderWithLinks;
}
