import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUrlsDatamodelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum GetUrlsDatamodelAreaEnum {
    Current = "current",
    Disappeared = "disappeared",
    New = "new",
    SearchEnginesOrphans = "search_engines_orphans"
}


export class GetUrlsDatamodelQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=area" })
  area?: GetUrlsDatamodelAreaEnum;
}


export class GetUrlsDatamodelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUrlsDatamodelPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUrlsDatamodelQueryParams;
}


export class GetUrlsDatamodelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  crawlDatamodel?: shared.CrawlDatamodel;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;
}
