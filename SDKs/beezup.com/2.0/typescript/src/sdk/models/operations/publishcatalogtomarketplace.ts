import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PublishCatalogToMarketplacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=marketplaceTechnicalCode" })
  marketplaceTechnicalCode: string;
}


export class PublishCatalogToMarketplaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PublishCatalogToMarketplacePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PublishCatalogToMarketplaceRequest;
}


export class PublishCatalogToMarketplaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
