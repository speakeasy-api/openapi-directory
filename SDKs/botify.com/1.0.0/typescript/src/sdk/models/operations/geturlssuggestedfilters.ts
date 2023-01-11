import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUrlsSuggestedFiltersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum GetUrlsSuggestedFiltersAreaEnum {
    Current = "current",
    New = "new"
}


export class GetUrlsSuggestedFiltersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=area" })
  area?: GetUrlsSuggestedFiltersAreaEnum;
}


export class GetUrlsSuggestedFiltersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUrlsSuggestedFiltersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUrlsSuggestedFiltersQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UrlsAggsQuery;
}


export class GetUrlsSuggestedFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  urlsAggsQuery?: shared.UrlsAggsQuery;
}
