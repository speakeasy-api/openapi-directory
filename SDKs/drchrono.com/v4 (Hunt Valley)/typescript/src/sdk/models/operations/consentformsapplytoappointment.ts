import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ConsentFormsApplyToAppointmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ConsentFormsApplyToAppointmentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ConsentFormsApplyToAppointmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ConsentFormsApplyToAppointmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ConsentFormsApplyToAppointmentPathParams;

  @SpeakeasyMetadata()
  queryParams: ConsentFormsApplyToAppointmentQueryParams;

  @SpeakeasyMetadata()
  security: ConsentFormsApplyToAppointmentSecurity;
}


export class ConsentFormsApplyToAppointmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
