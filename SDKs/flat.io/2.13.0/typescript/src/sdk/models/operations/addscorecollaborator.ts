import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddScoreCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class AddScoreCollaboratorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class AddScoreCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddScoreCollaboratorPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ResourceCollaboratorCreation;

  @SpeakeasyMetadata()
  security: AddScoreCollaboratorSecurity;
}


export class AddScoreCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  resourceCollaborator?: shared.ResourceCollaborator;

  @SpeakeasyMetadata()
  statusCode: number;
}
