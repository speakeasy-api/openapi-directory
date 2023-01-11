import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSitemapsSamplesOutOfConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetSitemapsSamplesOutOfConfigQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class GetSitemapsSamplesOutOfConfig200ApplicationJson extends SpeakeasyBase {
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


export class GetSitemapsSamplesOutOfConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSitemapsSamplesOutOfConfigPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSitemapsSamplesOutOfConfigQueryParams;
}


export class GetSitemapsSamplesOutOfConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getSitemapsSamplesOutOfConfig200ApplicationJSONObject?: GetSitemapsSamplesOutOfConfig200ApplicationJson;
}
