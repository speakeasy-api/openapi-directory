import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEpisodesIdNextSiblingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEpisodesIdNextSiblingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rss" })
  rss?: boolean;
}


export class GetEpisodesIdNextSibling200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Episode;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.ResourceLink;
}


export class GetEpisodesIdNextSiblingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEpisodesIdNextSiblingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEpisodesIdNextSiblingQueryParams;
}


export class GetEpisodesIdNextSiblingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEpisodesIdNextSibling200ApplicationVndApiPlusJsonObject?: GetEpisodesIdNextSibling200ApplicationVndApiPlusJson;
}
