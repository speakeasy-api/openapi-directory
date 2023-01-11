import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetGanalyticsOrphanUrLsMediumEnum {
    Organic = "organic",
    Social = "social"
}

export enum GetGanalyticsOrphanUrLsSourceEnum {
    All = "all",
    Aol = "aol",
    Ask = "ask",
    Baidu = "baidu",
    Bing = "bing",
    Facebook = "facebook",
    Google = "google",
    GooglePlus = "google+",
    Linkedin = "linkedin",
    Naver = "naver",
    Pinterest = "pinterest",
    Reddit = "reddit",
    Tumblr = "tumblr",
    Twitter = "twitter",
    Yahoo = "yahoo",
    Yandex = "yandex"
}


export class GetGanalyticsOrphanUrLsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=medium" })
  medium: GetGanalyticsOrphanUrLsMediumEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: GetGanalyticsOrphanUrLsSourceEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetGanalyticsOrphanUrLsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetGanalyticsOrphanUrLs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.CrawlOrphanUrLs })
  results?: shared.CrawlOrphanUrLs[];

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}


export class GetGanalyticsOrphanUrLsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGanalyticsOrphanUrLsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGanalyticsOrphanUrLsQueryParams;
}


export class GetGanalyticsOrphanUrLsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getGanalyticsOrphanURLs200ApplicationJSONObject?: GetGanalyticsOrphanUrLs200ApplicationJson;
}
