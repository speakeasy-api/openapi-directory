import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountHoldersIdBalanceAccountsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetAccountHoldersIdBalanceAccountsQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetAccountHoldersIdBalanceAccountsSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetAccountHoldersIdBalanceAccountsRequest extends SpeakeasyBase {
    pathParams: GetAccountHoldersIdBalanceAccountsPathParams;
    queryParams: GetAccountHoldersIdBalanceAccountsQueryParams;
    security: GetAccountHoldersIdBalanceAccountsSecurity;
}
export declare class GetAccountHoldersIdBalanceAccountsResponse extends SpeakeasyBase {
    contentType: string;
    paginatedBalanceAccountsResponse?: any;
    restServiceError?: any;
    statusCode: number;
}
