import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VerifyBusinessApiV1VerifyPhoneGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locking_period" })
  lockingPeriod?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class VerifyBusinessApiV1VerifyPhoneGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VerifyBusinessApiV1VerifyPhoneGetQueryParams;
}


export class VerifyBusinessApiV1VerifyPhoneGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyPhone?: shared.VerifyPhone;
}
