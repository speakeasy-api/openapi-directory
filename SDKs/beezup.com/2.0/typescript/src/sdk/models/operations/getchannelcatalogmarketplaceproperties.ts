import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelCatalogMarketplacePropertiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class GetChannelCatalogMarketplacePropertiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=redirectionPageUrl" })
  redirectionPageUrl: string;
}


export class GetChannelCatalogMarketplacePropertiesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string[];
}


export class GetChannelCatalogMarketplacePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChannelCatalogMarketplacePropertiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetChannelCatalogMarketplacePropertiesQueryParams;

  @SpeakeasyMetadata()
  headers: GetChannelCatalogMarketplacePropertiesHeaders;
}


export class GetChannelCatalogMarketplacePropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channelCatalogMarketplaceProperties?: shared.ChannelCatalogMarketplaceProperties;
}
