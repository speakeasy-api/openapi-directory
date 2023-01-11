import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReminderProfilesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ReminderProfilesReadQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ReminderProfilesReadSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ReminderProfilesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReminderProfilesReadPathParams;

  @SpeakeasyMetadata()
  queryParams: ReminderProfilesReadQueryParams;

  @SpeakeasyMetadata()
  security: ReminderProfilesReadSecurity;
}


export class ReminderProfilesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reminderProfile?: shared.ReminderProfile;

  @SpeakeasyMetadata()
  statusCode: number;
}
