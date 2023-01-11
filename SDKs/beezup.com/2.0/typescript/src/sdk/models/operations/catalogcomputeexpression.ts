import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CatalogComputeExpressionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CatalogComputeExpressionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CatalogComputeExpressionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ComputeExpressionRequest;
}


export class CatalogComputeExpressionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  catalogComputeExpression200ApplicationJSONString?: string;

  @SpeakeasyMetadata()
  catalogComputeExpression400ApplicationJSONString?: string;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
