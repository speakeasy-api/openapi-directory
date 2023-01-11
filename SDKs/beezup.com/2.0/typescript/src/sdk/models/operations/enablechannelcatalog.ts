import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnableChannelCatalogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;
}


export class EnableChannelCatalogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnableChannelCatalogPathParams;
}


export class EnableChannelCatalogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  upgradeOfferRequired?: shared.UpgradeOfferRequired;
}
