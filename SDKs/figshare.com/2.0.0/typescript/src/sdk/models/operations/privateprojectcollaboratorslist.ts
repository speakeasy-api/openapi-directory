import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateProjectCollaboratorsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class PrivateProjectCollaboratorsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateProjectCollaboratorsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateProjectCollaboratorsListPathParams;

  @SpeakeasyMetadata()
  security: PrivateProjectCollaboratorsListSecurity;
}


export class PrivateProjectCollaboratorsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.ProjectCollaborator })
  projectCollaborators?: shared.ProjectCollaborator[];

  @SpeakeasyMetadata()
  statusCode: number;
}
