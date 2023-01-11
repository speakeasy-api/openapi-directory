import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChannelCatalogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=storeId" })
  storeId?: string;
}


export class GetChannelCatalogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetChannelCatalogsQueryParams;
}


export class GetChannelCatalogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  channelCatalogList?: shared.ChannelCatalogList;
}
