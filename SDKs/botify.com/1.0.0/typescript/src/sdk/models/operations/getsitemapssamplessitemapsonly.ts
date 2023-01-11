import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSitemapsSamplesSitemapsOnlyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetSitemapsSamplesSitemapsOnlyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetSitemapsSamplesSitemapsOnly200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results" })
  results?: string[];

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}


export class GetSitemapsSamplesSitemapsOnlyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSitemapsSamplesSitemapsOnlyPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSitemapsSamplesSitemapsOnlyQueryParams;
}


export class GetSitemapsSamplesSitemapsOnlyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSitemapsSamplesSitemapsOnly200ApplicationJSONObject?: GetSitemapsSamplesSitemapsOnly200ApplicationJson;
}
