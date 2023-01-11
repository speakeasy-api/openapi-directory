import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubmissionCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission" })
  submission: string;
}


export class GetSubmissionCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSubmissionCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubmissionCommentsPathParams;

  @SpeakeasyMetadata()
  security: GetSubmissionCommentsSecurity;
}


export class GetSubmissionCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssignmentSubmissionComment })
  assignmentSubmissionComments?: shared.AssignmentSubmissionComment[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
