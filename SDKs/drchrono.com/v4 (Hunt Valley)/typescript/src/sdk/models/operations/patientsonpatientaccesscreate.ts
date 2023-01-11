import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientsOnpatientAccessCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientsOnpatientAccessCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=chart_id" })
  chartId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_of_birth" })
  dateOfBirth?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ethnicity" })
  ethnicity?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=preferred_language" })
  preferredLanguage?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=race" })
  race?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PatientsOnpatientAccessCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientsOnpatientAccessCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientsOnpatientAccessCreatePathParams;

  @SpeakeasyMetadata()
  queryParams: PatientsOnpatientAccessCreateQueryParams;

  @SpeakeasyMetadata()
  security: PatientsOnpatientAccessCreateSecurity;
}


export class PatientsOnpatientAccessCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  patient?: shared.Patient;

  @SpeakeasyMetadata()
  statusCode: number;
}
