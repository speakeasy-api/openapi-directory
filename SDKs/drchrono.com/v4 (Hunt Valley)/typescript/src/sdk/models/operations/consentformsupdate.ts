import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConsentFormsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ConsentFormsUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ConsentFormsUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ConsentFormsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConsentFormsUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: ConsentFormsUpdateQueryParams;

  @SpeakeasyMetadata()
  security: ConsentFormsUpdateSecurity;
}


export class ConsentFormsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
