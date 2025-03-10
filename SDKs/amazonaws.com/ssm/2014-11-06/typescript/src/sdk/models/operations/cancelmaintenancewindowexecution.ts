/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum CancelMaintenanceWindowExecutionXAmzTargetEnum {
  AmazonSSMCancelMaintenanceWindowExecution = "AmazonSSM.CancelMaintenanceWindowExecution",
}

export class CancelMaintenanceWindowExecutionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  cancelMaintenanceWindowExecutionRequest: shared.CancelMaintenanceWindowExecutionRequest;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Algorithm",
  })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256",
  })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Credential",
  })
  xAmzCredential?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Date",
  })
  xAmzDate?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Security-Token",
  })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Signature",
  })
  xAmzSignature?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders",
  })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=X-Amz-Target",
  })
  xAmzTarget: CancelMaintenanceWindowExecutionXAmzTargetEnum;
}

export class CancelMaintenanceWindowExecutionResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata()
  cancelMaintenanceWindowExecutionResult?: shared.CancelMaintenanceWindowExecutionResult;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * DoesNotExistException
   */
  @SpeakeasyMetadata()
  doesNotExistException?: any;

  /**
   * InternalServerError
   */
  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
