import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateBankAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UpdateBankAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateBankAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BankAccountInput;
}


export class UpdateBankAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bankAccount?: shared.BankAccount;

  @SpeakeasyMetadata()
  clientErrorResponse?: shared.ClientErrorResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  serverErrorResponse?: shared.ServerErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  validationErrorResponse?: shared.ValidationErrorResponse;
}
