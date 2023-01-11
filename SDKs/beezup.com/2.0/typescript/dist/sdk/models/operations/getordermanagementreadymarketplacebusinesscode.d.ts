import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderManagementReadyMarketplaceBusinessCodeQueryParams extends SpeakeasyBase {
    storeIds?: string[];
}
export declare class GetOrderManagementReadyMarketplaceBusinessCodeHeaders extends SpeakeasyBase {
    acceptLanguage?: string[];
}
export declare class GetOrderManagementReadyMarketplaceBusinessCodeRequest extends SpeakeasyBase {
    queryParams: GetOrderManagementReadyMarketplaceBusinessCodeQueryParams;
    headers: GetOrderManagementReadyMarketplaceBusinessCodeHeaders;
}
export declare class GetOrderManagementReadyMarketplaceBusinessCodeResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
    oMReadyMarketplaceBusinessCodeResponse?: shared.ListOfValueItem[];
}
