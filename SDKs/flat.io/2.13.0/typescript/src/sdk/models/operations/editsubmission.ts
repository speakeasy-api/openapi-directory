import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission" })
  submission: string;
}


export class EditSubmissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class EditSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditSubmissionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssignmentSubmissionUpdate;

  @SpeakeasyMetadata()
  security: EditSubmissionSecurity;
}


export class EditSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignmentSubmission?: shared.AssignmentSubmission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
