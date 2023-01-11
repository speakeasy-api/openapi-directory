import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSubmissionHistoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission" })
  submission: string;
}


export class GetSubmissionHistorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class GetSubmissionHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSubmissionHistoryPathParams;

  @SpeakeasyMetadata()
  security: GetSubmissionHistorySecurity;
}


export class GetSubmissionHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssignmentSubmissionHistory })
  assignmentSubmissionHistories?: shared.AssignmentSubmissionHistory[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
