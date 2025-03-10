/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class DeletePipelineVariableForUserRequest extends SpeakeasyBase {
  /**
   * Either the UUID of the account surrounded by curly-braces, for example `{account UUID}`, OR an Atlassian Account ID.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=selected_user",
  })
  selectedUser: string;

  /**
   * The UUID of the variable to delete.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=variable_uuid",
  })
  variableUuid: string;
}

export class DeletePipelineVariableForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * The account or the variable with the provided UUID does not exist.
   */
  @SpeakeasyMetadata()
  error?: Record<string, any>;
}
