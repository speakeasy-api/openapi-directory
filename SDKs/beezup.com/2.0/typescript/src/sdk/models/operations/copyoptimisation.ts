import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CopyOptimisationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=storeId" })
  storeId: string;
}


export class CopyOptimisationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CopyOptimisationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CopyOptimisationRequest;
}


export class CopyOptimisationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  copyOptimisationResponse?: shared.CopyOptimisationResponse;
}
