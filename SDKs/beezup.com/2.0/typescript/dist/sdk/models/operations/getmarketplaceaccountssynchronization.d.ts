import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMarketplaceAccountsSynchronizationQueryParams extends SpeakeasyBase {
    storeId?: string;
}
export declare class GetMarketplaceAccountsSynchronizationHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetMarketplaceAccountsSynchronizationRequest extends SpeakeasyBase {
    queryParams: GetMarketplaceAccountsSynchronizationQueryParams;
    headers: GetMarketplaceAccountsSynchronizationHeaders;
}
export declare class GetMarketplaceAccountsSynchronizationResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    accountSynchronizationList?: shared.AccountSynchronizationList;
}
