import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OptimisePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionName" })
  actionName: shared.OptimisationActionNameGeneralParametersEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class OptimiseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptimisePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OptimiseRequest;
}


export class OptimiseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
