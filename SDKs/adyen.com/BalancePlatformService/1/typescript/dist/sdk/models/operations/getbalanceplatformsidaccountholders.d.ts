import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBalancePlatformsIdAccountHoldersPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetBalancePlatformsIdAccountHoldersQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
}
export declare class GetBalancePlatformsIdAccountHoldersSecurity extends SpeakeasyBase {
    basicAuth?: shared.SchemeBasicAuth;
    apiKeyAuth?: shared.SchemeApiKeyAuth;
}
export declare class GetBalancePlatformsIdAccountHoldersRequest extends SpeakeasyBase {
    pathParams: GetBalancePlatformsIdAccountHoldersPathParams;
    queryParams: GetBalancePlatformsIdAccountHoldersQueryParams;
    security: GetBalancePlatformsIdAccountHoldersSecurity;
}
export declare class GetBalancePlatformsIdAccountHoldersResponse extends SpeakeasyBase {
    contentType: string;
    paginatedAccountHoldersResponse?: any;
    restServiceError?: any;
    statusCode: number;
}
