import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteUsersUseridAuthorizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUsersUseridAuthorizationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientAccessToken: shared.SchemeClientAccessToken;
}


export class DeleteUsersUseridAuthorizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUsersUseridAuthorizationPathParams;

  @SpeakeasyMetadata()
  security: DeleteUsersUseridAuthorizationSecurity;
}


export class DeleteUsersUseridAuthorizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
