import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HarvestOrderPathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class HarvestOrderRequest extends SpeakeasyBase {
    pathParams: HarvestOrderPathParams;
}
export declare class HarvestOrderResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
