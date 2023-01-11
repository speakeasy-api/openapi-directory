import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReminderProfilesUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ReminderProfilesUpdateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ReminderProfilesUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ReminderProfilesUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReminderProfilesUpdatePathParams;

  @SpeakeasyMetadata()
  queryParams: ReminderProfilesUpdateQueryParams;

  @SpeakeasyMetadata()
  security: ReminderProfilesUpdateSecurity;
}


export class ReminderProfilesUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
