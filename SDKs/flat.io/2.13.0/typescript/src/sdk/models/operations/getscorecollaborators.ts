import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScoreCollaboratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class GetScoreCollaboratorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sharingKey" })
  sharingKey?: string;
}


export class GetScoreCollaboratorsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScoreCollaboratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScoreCollaboratorsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScoreCollaboratorsQueryParams;

  @SpeakeasyMetadata()
  security: GetScoreCollaboratorsSecurity;
}


export class GetScoreCollaboratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata({ elemType: shared.ResourceCollaborator })
  resourceCollaborators?: shared.ResourceCollaborator[];

  @SpeakeasyMetadata()
  statusCode: number;
}
