import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetCrawlStatisticsUrlsListTypeEnum {
    Crawled = "crawled",
    Errors = "errors"
}


export class GetCrawlStatisticsUrlsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=list_type" })
  listType: GetCrawlStatisticsUrlsListTypeEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetCrawlStatisticsUrlsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCrawlStatisticsUrlsPathParams;
}


export class GetCrawlStatisticsUrlsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getCrawlStatisticsUrls200ApplicationJSONAnies?: any[];
}
