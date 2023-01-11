import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUrlsAggsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum GetUrlsAggsAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}


export class GetUrlsAggsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=area" })
  area?: GetUrlsAggsAreaEnum;
}


export class GetUrlsAggsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUrlsAggsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUrlsAggsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.UrlsAggsQuery })
  request?: shared.UrlsAggsQuery[];
}


export class GetUrlsAggsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getUrlsAggs200ApplicationJSONAnies?: any[];
}
