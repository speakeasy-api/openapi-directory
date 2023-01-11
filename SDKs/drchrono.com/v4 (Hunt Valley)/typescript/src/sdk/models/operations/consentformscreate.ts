import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConsentFormsCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ConsentFormsCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ConsentFormsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ConsentFormsCreateQueryParams;

  @SpeakeasyMetadata()
  security: ConsentFormsCreateSecurity;
}


export class ConsentFormsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consentForm?: shared.ConsentForm;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
