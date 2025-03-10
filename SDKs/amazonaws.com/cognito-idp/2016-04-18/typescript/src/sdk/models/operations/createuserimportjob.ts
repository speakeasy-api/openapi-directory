/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum CreateUserImportJobXAmzTargetEnum {
  AWSCognitoIdentityProviderServiceCreateUserImportJob = "AWSCognitoIdentityProviderService.CreateUserImportJob",
}

export class CreateUserImportJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createUserImportJobRequest: shared.CreateUserImportJobRequest;

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
  xAmzTarget: CreateUserImportJobXAmzTargetEnum;
}

export class CreateUserImportJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  createUserImportJobResponse?: shared.CreateUserImportJobResponse;

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
   * LimitExceededException
   */
  @SpeakeasyMetadata()
  limitExceededException?: any;

  /**
   * NotAuthorizedException
   */
  @SpeakeasyMetadata()
  notAuthorizedException?: any;

  /**
   * PreconditionNotMetException
   */
  @SpeakeasyMetadata()
  preconditionNotMetException?: any;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * TooManyRequestsException
   */
  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
