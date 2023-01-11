import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppointmentTemplatesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile" })
  profile?: number;
}


export class AppointmentTemplatesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AppointmentTemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AppointmentTemplatesCreateQueryParams;

  @SpeakeasyMetadata()
  security: AppointmentTemplatesCreateSecurity;
}


export class AppointmentTemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentTemplate?: shared.AppointmentTemplate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
