import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HarvestAccountPathParams extends SpeakeasyBase {
    accountId: number;
    marketplaceTechnicalCode: string;
}
export declare class HarvestAccountQueryParams extends SpeakeasyBase {
    beezUPOrderId?: string;
    marketplaceOrderId?: string;
}
export declare class HarvestAccountRequest extends SpeakeasyBase {
    pathParams: HarvestAccountPathParams;
    queryParams: HarvestAccountQueryParams;
}
export declare class HarvestAccountResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
