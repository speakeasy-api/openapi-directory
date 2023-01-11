import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteChannelCatalogProductValueOverridePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelColumnId" })
  channelColumnId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class DeleteChannelCatalogProductValueOverrideRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteChannelCatalogProductValueOverridePathParams;
}


export class DeleteChannelCatalogProductValueOverrideResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
