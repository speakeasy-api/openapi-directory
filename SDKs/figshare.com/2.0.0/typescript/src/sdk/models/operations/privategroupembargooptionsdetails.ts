import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateGroupEmbargoOptionsDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: number;
}


export class PrivateGroupEmbargoOptionsDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateGroupEmbargoOptionsDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateGroupEmbargoOptionsDetailsPathParams;

  @SpeakeasyMetadata()
  security: PrivateGroupEmbargoOptionsDetailsSecurity;
}


export class PrivateGroupEmbargoOptionsDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.GroupEmbargoOptions })
  groupEmbargoOptions?: shared.GroupEmbargoOptions[];

  @SpeakeasyMetadata()
  statusCode: number;
}
