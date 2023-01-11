import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PublishCatalogToMarketplacePathParams extends SpeakeasyBase {
    accountId: number;
    marketplaceTechnicalCode: string;
}
export declare class PublishCatalogToMarketplaceRequest extends SpeakeasyBase {
    pathParams: PublishCatalogToMarketplacePathParams;
    request: shared.PublishCatalogToMarketplaceRequest;
}
export declare class PublishCatalogToMarketplaceResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
}
