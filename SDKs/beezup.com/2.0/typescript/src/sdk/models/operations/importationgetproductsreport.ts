import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportationGetProductsReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ImportationGetProductsReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportationGetProductsReportPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetImportationProductsReportRequest;
}


export class ImportationGetProductsReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getImportationProductsReportResponse?: any;
}
