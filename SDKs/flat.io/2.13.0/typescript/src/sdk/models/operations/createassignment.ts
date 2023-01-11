import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class CreateAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAssignmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AssignmentCreation;

  @SpeakeasyMetadata()
  security: CreateAssignmentSecurity;
}


export class CreateAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignment?: shared.Assignment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
