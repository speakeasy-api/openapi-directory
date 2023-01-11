import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VerifySkuApiV1VerifySkuGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locking_period" })
  lockingPeriod?: any;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query: string;
}


export class VerifySkuApiV1VerifySkuGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VerifySkuApiV1VerifySkuGetQueryParams;
}


export class VerifySkuApiV1VerifySkuGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpValidationError?: shared.HttpValidationError;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyPhone?: shared.VerifyPhone;
}
