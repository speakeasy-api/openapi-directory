import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatientsSummaryDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PatientsSummaryDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_of_birth" })
  dateOfBirth?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: string;
}


export class PatientsSummaryDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class PatientsSummaryDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatientsSummaryDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: PatientsSummaryDeleteQueryParams;

  @SpeakeasyMetadata()
  security: PatientsSummaryDeleteSecurity;
}


export class PatientsSummaryDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
