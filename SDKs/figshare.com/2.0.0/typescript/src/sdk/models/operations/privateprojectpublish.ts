import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateProjectPublishPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class PrivateProjectPublishSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateProjectPublishRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateProjectPublishPathParams;

  @SpeakeasyMetadata()
  security: PrivateProjectPublishSecurity;
}


export class PrivateProjectPublishResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  responseMessage?: shared.ResponseMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
