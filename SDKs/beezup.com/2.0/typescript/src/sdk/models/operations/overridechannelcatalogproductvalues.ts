import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OverrideChannelCatalogProductValuesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class OverrideChannelCatalogProductValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OverrideChannelCatalogProductValuesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Record<string, string>;
}


export class OverrideChannelCatalogProductValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
