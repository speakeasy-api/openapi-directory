/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetTaskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "security, scheme=true;type=oauth2;name=Authorization",
  })
  apiAuth: string;
}

export class GetTaskRequest extends SpeakeasyBase {
  /**
   * The ID of the task. This ID was generated when the task was created.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=task_id",
  })
  taskId: string;
}

export class GetTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  task?: shared.Task;
}
