import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCrawlStatisticsByFrequencyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum GetCrawlStatisticsByFrequencyFrequencyEnum {
    Onemn = "1mn",
    Fivemn = "5mn",
    Sixtymn = "60mn"
}


export class GetCrawlStatisticsByFrequencyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=frequency" })
  frequency: GetCrawlStatisticsByFrequencyFrequencyEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetCrawlStatisticsByFrequencyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCrawlStatisticsByFrequencyPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCrawlStatisticsByFrequencyQueryParams;
}


export class GetCrawlStatisticsByFrequencyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  crawlStatisticsTime?: shared.CrawlStatisticsTime;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;
}
