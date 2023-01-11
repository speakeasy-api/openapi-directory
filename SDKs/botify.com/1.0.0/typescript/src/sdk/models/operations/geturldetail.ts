import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUrlDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUrlDetailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=fields" })
  fields?: string[];
}


export class GetUrlDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUrlDetailPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUrlDetailQueryParams;
}


export class GetUrlDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  urlDetail?: Record<string, any>;
}
