import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubmissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;
}


export class GetSubmissionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSubmissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubmissionsPathParams;

  @SpeakeasyMetadata()
  security: GetSubmissionsSecurity;
}


export class GetSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssignmentSubmission })
  assignmentSubmissions?: shared.AssignmentSubmission[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
