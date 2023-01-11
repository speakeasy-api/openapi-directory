import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImagesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetImagesId200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Image;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.ResourceLink;
}


export class GetImagesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImagesIdPathParams;
}


export class GetImagesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getImagesId200ApplicationVndApiPlusJsonObject?: GetImagesId200ApplicationVndApiPlusJson;
}
