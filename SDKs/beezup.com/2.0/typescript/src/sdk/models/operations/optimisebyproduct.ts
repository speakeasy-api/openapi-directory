import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OptimiseByProductPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionName" })
  actionName: shared.OptimisationActionNameGeneralParametersEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=productId" })
  productId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class OptimiseByProductRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptimiseByProductPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: string[];
}


export class OptimiseByProductResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
