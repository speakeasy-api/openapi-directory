import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEpisodesIdPreviousSiblingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEpisodesIdPreviousSiblingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rss" })
  rss?: boolean;
}


export class GetEpisodesIdPreviousSibling200ApplicationVndApiPlusJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: shared.Episode;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: shared.ResourceLink;
}


export class GetEpisodesIdPreviousSiblingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEpisodesIdPreviousSiblingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetEpisodesIdPreviousSiblingQueryParams;
}


export class GetEpisodesIdPreviousSiblingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEpisodesIdPreviousSibling200ApplicationVndApiPlusJsonObject?: GetEpisodesIdPreviousSibling200ApplicationVndApiPlusJson;
}
