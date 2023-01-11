import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectUrlsAggsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum GetProjectUrlsAggsAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new"
}


export class GetProjectUrlsAggsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=area" })
  area?: GetProjectUrlsAggsAreaEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_analysis_slug" })
  lastAnalysisSlug?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nb_analyses" })
  nbAnalyses?: number;
}


export class GetProjectUrlsAggsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProjectUrlsAggsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProjectUrlsAggsQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.UrlsAggsQuery })
  request?: shared.UrlsAggsQuery[];
}


export class GetProjectUrlsAggsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  default?: Record<string, any>;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;
}
