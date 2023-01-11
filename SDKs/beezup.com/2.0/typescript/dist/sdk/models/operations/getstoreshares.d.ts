import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStoreSharesPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class GetStoreSharesHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetStoreSharesRequest extends SpeakeasyBase {
    pathParams: GetStoreSharesPathParams;
    headers: GetStoreSharesHeaders;
}
export declare class GetStoreSharesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    storeShares?: shared.StoreShares;
}
