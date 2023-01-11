import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMediaAssetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMediaAssetsId200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.MediaAsset;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.ResourceLink;
}


export class GetMediaAssetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMediaAssetsIdPathParams;
}


export class GetMediaAssetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMediaAssetsId200ApplicationVndApiPlusJsonObject?: GetMediaAssetsId200ApplicationVndApiPlusJson;
}
