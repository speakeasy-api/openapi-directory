import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSitemapsReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetSitemapsReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSitemapsReportPathParams;
}


export class GetSitemapsReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  sitemapsReport?: shared.SitemapsReport;

  @SpeakeasyMetadata()
  statusCode: number;
}
