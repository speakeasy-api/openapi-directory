import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMarketplaceChannelCatalogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storeId" })
  storeId?: string;
}


export class GetMarketplaceChannelCatalogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMarketplaceChannelCatalogsQueryParams;
}


export class GetMarketplaceChannelCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  marketplaceChannelCatalogList?: shared.MarketplaceChannelCatalogList;
}
