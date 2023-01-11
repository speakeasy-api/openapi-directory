import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConsentFormsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ConsentFormsReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ConsentFormsReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ConsentFormsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConsentFormsReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ConsentFormsReadQueryParams;

  @SpeakeasyMetadata()
  security: ConsentFormsReadSecurity;
}


export class ConsentFormsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  consentForm?: shared.ConsentForm;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
