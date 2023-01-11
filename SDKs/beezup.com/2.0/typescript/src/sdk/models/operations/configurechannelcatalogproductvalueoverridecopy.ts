import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConfigureChannelCatalogProductValueOverrideCopyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelCatalogId" })
  channelCatalogId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;
}


export class ConfigureChannelCatalogProductValueOverrideCopyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConfigureChannelCatalogProductValueOverrideCopyPathParams;
}


export class ConfigureChannelCatalogProductValueOverrideCopyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
