import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMarketplaceAccountsSynchronizationV3QueryParams extends SpeakeasyBase {
    storeIds?: string[];
}
export declare class GetMarketplaceAccountsSynchronizationV3Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetMarketplaceAccountsSynchronizationV3Request extends SpeakeasyBase {
    queryParams: GetMarketplaceAccountsSynchronizationV3QueryParams;
    headers: GetMarketplaceAccountsSynchronizationV3Headers;
}
export declare class GetMarketplaceAccountsSynchronizationV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    accountSynchronizationList?: shared.AccountSynchronizationList;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
