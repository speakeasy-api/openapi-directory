/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum RebootInstanceXAmzTargetEnum {
  Lightsail20161128RebootInstance = "Lightsail_20161128.RebootInstance",
}

export class RebootInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  rebootInstanceRequest: shared.RebootInstanceRequest;

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
  xAmzTarget: RebootInstanceXAmzTargetEnum;
}

export class RebootInstanceResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  /**
   * AccountSetupInProgressException
   */
  @SpeakeasyMetadata()
  accountSetupInProgressException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InvalidInputException
   */
  @SpeakeasyMetadata()
  invalidInputException?: any;

  /**
   * NotFoundException
   */
  @SpeakeasyMetadata()
  notFoundException?: any;

  /**
   * OperationFailureException
   */
  @SpeakeasyMetadata()
  operationFailureException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  rebootInstanceResult?: shared.RebootInstanceResult;

  /**
   * ServiceException
   */
  @SpeakeasyMetadata()
  serviceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * UnauthenticatedException
   */
  @SpeakeasyMetadata()
  unauthenticatedException?: any;
}
