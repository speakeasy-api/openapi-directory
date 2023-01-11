import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePartnerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdatePartnerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePartnerPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PartnerUpsert;
}


export class UpdatePartnerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientErrorResponse?: shared.ClientErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  partner?: shared.Partner;

  @SpeakeasyMetadata()
  serverErrorResponse?: shared.ServerErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrorResponse?: shared.ValidationErrorResponse;
}
