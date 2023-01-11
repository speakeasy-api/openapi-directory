import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteUsersUseridPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class DeleteUsersUseridSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  clientAccessToken: shared.SchemeClientAccessToken;
}


export class DeleteUsersUseridRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUsersUseridPathParams;

  @SpeakeasyMetadata()
  security: DeleteUsersUseridSecurity;
}


export class DeleteUsersUseridResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
