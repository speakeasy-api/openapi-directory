import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUrlsExportStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=analysis_slug" })
  analysisSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_slug" })
  projectSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=url_export_id" })
  urlExportId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetUrlsExportStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUrlsExportStatusPathParams;
}


export class GetUrlsExportStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  csvExportStatus?: shared.CsvExportStatus;

  @SpeakeasyMetadata()
  defaultPayload?: shared.DefaultPayload;

  @SpeakeasyMetadata()
  statusCode: number;
}
