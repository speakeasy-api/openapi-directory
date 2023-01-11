import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListClassStudentSubmissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user" })
  user: string;
}


export class ListClassStudentSubmissionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ListClassStudentSubmissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListClassStudentSubmissionsPathParams;

  @SpeakeasyMetadata()
  security: ListClassStudentSubmissionsSecurity;
}


export class ListClassStudentSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssignmentSubmission })
  assignmentSubmissions?: shared.AssignmentSubmission[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
