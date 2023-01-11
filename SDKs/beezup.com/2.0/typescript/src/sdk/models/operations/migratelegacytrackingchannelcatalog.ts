import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrateLegacyTrackingChannelCatalogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class MigrateLegacyTrackingChannelCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrateLegacyTrackingChannelCatalogPathParams;
}


export class MigrateLegacyTrackingChannelCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
