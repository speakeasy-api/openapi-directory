import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdatePaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdatePaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdatePaymentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json", elemType: shared.PaymentHistory })
  request: shared.PaymentHistory[];
}


export class UpdatePaymentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientErrorResponse?: shared.ClientErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata({ elemType: shared.PaymentHistory })
  paymentHistories?: shared.PaymentHistory[];

  @SpeakeasyMetadata()
  serverErrorResponse?: shared.ServerErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrorResponse?: shared.ValidationErrorResponse;
}
