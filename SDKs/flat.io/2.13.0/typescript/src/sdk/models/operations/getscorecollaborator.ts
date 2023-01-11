import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScoreCollaboratorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collaborator" })
  collaborator: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class GetScoreCollaboratorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class GetScoreCollaboratorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScoreCollaboratorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScoreCollaboratorPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScoreCollaboratorQueryParams;

  @SpeakeasyMetadata()
  security: GetScoreCollaboratorSecurity;
}


export class GetScoreCollaboratorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  resourceCollaborator?: shared.ResourceCollaborator;

  @SpeakeasyMetadata()
  statusCode: number;
}
