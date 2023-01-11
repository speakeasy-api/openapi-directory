import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OptimiseAllPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=actionName" })
  actionName: shared.OptimisationActionNameGeneralParametersEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class OptimiseAllRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptimiseAllPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.OptimiseAllRequest;
}


export class OptimiseAllResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
