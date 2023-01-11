import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportationGetProductSampleCustomColumnValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=columnId" })
  columnId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productSampleIndex" })
  productSampleIndex: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ImportationGetProductSampleCustomColumnValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportationGetProductSampleCustomColumnValuePathParams;
}


export class ImportationGetProductSampleCustomColumnValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  importationGetProductSampleCustomColumnValue200ApplicationJSONString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
