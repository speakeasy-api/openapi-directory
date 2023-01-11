import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeOrderPathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    changeOrderType: string;
    marketplaceTechnicalCode: string;
}
export declare class ChangeOrderQueryParams extends SpeakeasyBase {
    testMode?: boolean;
    userName: string;
}
export declare class ChangeOrderHeaders extends SpeakeasyBase {
    ifMatch: string;
}
export declare class ChangeOrderRequest extends SpeakeasyBase {
    pathParams: ChangeOrderPathParams;
    queryParams: ChangeOrderQueryParams;
    headers: ChangeOrderHeaders;
    request?: Record<string, string>;
}
export declare class ChangeOrderResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
