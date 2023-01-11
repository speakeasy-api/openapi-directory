import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScoreSubmissionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=score" })
  score: string;
}


export class GetScoreSubmissionsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetScoreSubmissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScoreSubmissionsPathParams;

  @SpeakeasyMetadata()
  security: GetScoreSubmissionsSecurity;
}


export class GetScoreSubmissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssignmentSubmission })
  assignmentSubmissions?: shared.AssignmentSubmission[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
