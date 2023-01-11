import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ImportationGetCustomColumnExpressionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=columnId" })
  columnId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=executionId" })
  executionId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class ImportationGetCustomColumnExpressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ImportationGetCustomColumnExpressionPathParams;
}


export class ImportationGetCustomColumnExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  importationGetCustomColumnExpression200ApplicationJSONString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
