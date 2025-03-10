/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class PrivateProjectNoteUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  oAuth2: string;
}

export class PrivateProjectNoteUpdateRequest extends SpeakeasyBase {
  /**
   * Note message
   */
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  projectNoteCreate: shared.ProjectNoteCreate;

  /**
   * Note unique identifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=note_id",
  })
  noteId: number;

  /**
   * Project unique identifier
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=project_id",
  })
  projectId: number;
}

export class PrivateProjectNoteUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Forbidden
   */
  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  headers?: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
