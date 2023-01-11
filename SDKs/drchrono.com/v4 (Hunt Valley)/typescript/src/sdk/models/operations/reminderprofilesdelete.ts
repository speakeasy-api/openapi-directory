import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReminderProfilesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ReminderProfilesDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=doctor" })
  doctor?: number;
}


export class ReminderProfilesDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  drchronoOauth2: shared.SchemeDrchronoOauth2;
}


export class ReminderProfilesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReminderProfilesDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: ReminderProfilesDeleteQueryParams;

  @SpeakeasyMetadata()
  security: ReminderProfilesDeleteSecurity;
}


export class ReminderProfilesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
