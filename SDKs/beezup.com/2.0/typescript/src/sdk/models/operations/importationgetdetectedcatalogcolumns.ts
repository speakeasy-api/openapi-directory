import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportationGetDetectedCatalogColumnsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ImportationGetDetectedCatalogColumnsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportationGetDetectedCatalogColumnsPathParams;
}


export class ImportationGetDetectedCatalogColumnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  detectedCatalogColumnList?: shared.DetectedCatalogColumnList;
}
