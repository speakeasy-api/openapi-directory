import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSubmissionCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission" })
  submission: string;
}


export class PostSubmissionCommentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PostSubmissionCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSubmissionCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.AssignmentSubmissionCommentCreation;

  @SpeakeasyMetadata()
  security: PostSubmissionCommentSecurity;
}


export class PostSubmissionCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignmentSubmissionComment?: shared.AssignmentSubmissionComment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
