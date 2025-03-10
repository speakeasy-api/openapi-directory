/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum CreateNotificationXAmzTargetEnum {
  AWSBudgetServiceGatewayCreateNotification = "AWSBudgetServiceGateway.CreateNotification",
}

export class CreateNotificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createNotificationRequest: shared.CreateNotificationRequest;

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
  xAmzTarget: CreateNotificationXAmzTargetEnum;
}

export class CreateNotificationResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  createNotificationResponse?: Record<string, any>;

  /**
   * CreationLimitExceededException
   */
  @SpeakeasyMetadata()
  creationLimitExceededException?: any;

  /**
   * DuplicateRecordException
   */
  @SpeakeasyMetadata()
  duplicateRecordException?: any;

  /**
   * InternalErrorException
   */
  @SpeakeasyMetadata()
  internalErrorException?: any;

  /**
   * InvalidParameterException
   */
  @SpeakeasyMetadata()
  invalidParameterException?: any;

  /**
   * NotFoundException
   */
  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;
}
