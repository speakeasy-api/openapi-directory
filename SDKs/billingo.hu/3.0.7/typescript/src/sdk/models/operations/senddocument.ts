import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendDocumentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class SendDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SendDocumentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SendDocument;
}


export class SendDocumentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientErrorResponse?: shared.ClientErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  sendDocument?: shared.SendDocument;

  @SpeakeasyMetadata()
  serverErrorResponse?: shared.ServerErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrorResponse?: shared.ValidationErrorResponse;
}
