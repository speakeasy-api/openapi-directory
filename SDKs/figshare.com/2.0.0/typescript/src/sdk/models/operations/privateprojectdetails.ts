import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateProjectDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class PrivateProjectDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateProjectDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateProjectDetailsPathParams;

  @SpeakeasyMetadata()
  security: PrivateProjectDetailsSecurity;
}


export class PrivateProjectDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  projectCompletePrivate?: shared.ProjectCompletePrivate;

  @SpeakeasyMetadata()
  statusCode: number;
}
