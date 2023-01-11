import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPaymentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPaymentPathParams;
}


export class GetPaymentResponse extends SpeakeasyBase {
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
