import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateSubmissionCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission" })
  submission: string;
}


export class UpdateSubmissionCommentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class UpdateSubmissionCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateSubmissionCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssignmentSubmissionCommentCreation;

  @SpeakeasyMetadata()
  security: UpdateSubmissionCommentSecurity;
}


export class UpdateSubmissionCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignmentSubmissionComment?: shared.AssignmentSubmissionComment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
