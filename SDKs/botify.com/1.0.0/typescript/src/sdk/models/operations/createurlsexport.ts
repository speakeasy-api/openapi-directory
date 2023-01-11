import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateUrlsExportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum CreateUrlsExportAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}


export class CreateUrlsExportQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=area" })
  area?: CreateUrlsExportAreaEnum;
}


export class CreateUrlsExportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateUrlsExportPathParams;

  @SpeakeasyMetadata()
  queryParams: CreateUrlsExportQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UrlsQuery;
}


export class CreateUrlsExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  csvExportStatus?: shared.CsvExportStatus;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;
}
