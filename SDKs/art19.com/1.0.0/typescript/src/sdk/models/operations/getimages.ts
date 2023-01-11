import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids[]" })
  ids: string[];
}


export class GetImages200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Image })
  data?: shared.Image[];

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.Links;
}


// GetImages400ApplicationVndApiPlusJsonErrorsSource
/** 
 * An object containing references to the source of the error, optionally including any of the following members.
 * 
**/
export class GetImages400ApplicationVndApiPlusJsonErrorsSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameter" })
  parameter?: string;

  @SpeakeasyMetadata({ data: "json, name=pointer" })
  pointer?: string;
}


export class GetImages400ApplicationVndApiPlusJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: GetImages400ApplicationVndApiPlusJsonErrorsSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


export class GetImages400ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: GetImages400ApplicationVndApiPlusJsonErrors })
  errors?: GetImages400ApplicationVndApiPlusJsonErrors[];
}


export class GetImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetImagesQueryParams;
}


export class GetImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getImages200ApplicationVndApiPlusJsonObject?: GetImages200ApplicationVndApiPlusJson;

  @SpeakeasyMetadata()
  getImages400ApplicationVndApiPlusJsonObject?: GetImages400ApplicationVndApiPlusJson;
}
