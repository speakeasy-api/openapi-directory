/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class CreateSubmissionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oAuth2: string;
}

export class CreateSubmissionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  assignmentSubmissionUpdate: shared.AssignmentSubmissionUpdate;

  /**
   * Unique identifier of the assignment
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=assignment",
  })
  assignment: string;

  /**
   * Unique identifier of the class
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=class",
  })
  class: string;
}

export class CreateSubmissionResponse extends SpeakeasyBase {
  /**
   * The submission
   */
  @SpeakeasyMetadata()
  assignmentSubmission?: shared.AssignmentSubmission;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Error
   */
  @SpeakeasyMetadata()
  flatErrorResponse?: shared.FlatErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
