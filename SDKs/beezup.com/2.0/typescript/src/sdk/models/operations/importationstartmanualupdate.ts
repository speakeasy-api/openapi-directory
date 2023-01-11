import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportationStartManualUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ImportationStartManualUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportationStartManualUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StartManualImportRequest;
}


export class ImportationStartManualUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  importAlreadyInProgressResponse?: shared.ImportAlreadyInProgressResponse;

  @SpeakeasyMetadata()
  linksImportationGetImportationMonitoringLink?: shared.LinksImportationGetImportationMonitoringLink;
}
