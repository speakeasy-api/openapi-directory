import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadOrderPathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class HeadOrderHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class HeadOrderRequest extends SpeakeasyBase {
    pathParams: HeadOrderPathParams;
    headers: HeadOrderHeaders;
}
export declare class HeadOrderResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
