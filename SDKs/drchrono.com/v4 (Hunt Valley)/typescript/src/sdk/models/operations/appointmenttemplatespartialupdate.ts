import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppointmentTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppointmentTemplatesPartialUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile" })
  profile?: number;
}


export class AppointmentTemplatesPartialUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AppointmentTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppointmentTemplatesPartialUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: AppointmentTemplatesPartialUpdateQueryParams;

  @SpeakeasyMetadata()
  security: AppointmentTemplatesPartialUpdateSecurity;
}


export class AppointmentTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
