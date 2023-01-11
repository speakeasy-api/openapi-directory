import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AmendmentsPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AmendmentsPartialUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=appointment" })
  appointment?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=patient" })
  patient?: number;
}


export class AmendmentsPartialUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AmendmentsPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AmendmentsPartialUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: AmendmentsPartialUpdateQueryParams;

  @SpeakeasyMetadata()
  security: AmendmentsPartialUpdateSecurity;
}


export class AmendmentsPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
