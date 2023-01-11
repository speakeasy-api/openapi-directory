import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class CreateSubmissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class CreateSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSubmissionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssignmentSubmissionUpdate;

  @SpeakeasyMetadata()
  security: CreateSubmissionSecurity;
}


export class CreateSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignmentSubmission?: shared.AssignmentSubmission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
