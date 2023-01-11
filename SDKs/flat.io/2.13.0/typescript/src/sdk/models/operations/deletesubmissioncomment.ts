import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSubmissionCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=assignment" })
  assignment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=class" })
  class: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment" })
  comment: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=submission" })
  submission: string;
}


export class DeleteSubmissionCommentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class DeleteSubmissionCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSubmissionCommentPathParams;

  @SpeakeasyMetadata()
  security: DeleteSubmissionCommentSecurity;
}


export class DeleteSubmissionCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
