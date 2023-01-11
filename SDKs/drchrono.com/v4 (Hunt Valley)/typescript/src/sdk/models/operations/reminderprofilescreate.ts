import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReminderProfilesCreateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ReminderProfilesCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ReminderProfilesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReminderProfilesCreateQueryParams;

  @SpeakeasyMetadata()
  security: ReminderProfilesCreateSecurity;
}


export class ReminderProfilesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reminderProfile?: shared.ReminderProfile;

  @SpeakeasyMetadata()
  statusCode: number;
}
