import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AppointmentTemplatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class AppointmentTemplatesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=office" })
  office?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=profile" })
  profile?: number;
}


export class AppointmentTemplatesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class AppointmentTemplatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AppointmentTemplatesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: AppointmentTemplatesReadQueryParams;

  @SpeakeasyMetadata()
  security: AppointmentTemplatesReadSecurity;
}


export class AppointmentTemplatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appointmentTemplate?: shared.AppointmentTemplate;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
