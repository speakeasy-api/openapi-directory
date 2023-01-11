import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubmissionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission" })
  submission: string;
}


export class GetSubmissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubmissionPathParams;

  @SpeakeasyMetadata()
  security: GetSubmissionSecurity;
}


export class GetSubmissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  assignmentSubmission?: shared.AssignmentSubmission;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
