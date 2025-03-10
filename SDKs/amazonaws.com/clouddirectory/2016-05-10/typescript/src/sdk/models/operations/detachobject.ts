/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * The reference that identifies an object.
 */
export class DetachObjectRequestBodyParentReference extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "Selector" })
  selector?: string;
}

export class DetachObjectRequestBody extends SpeakeasyBase {
  /**
   * The link name associated with the object that needs to be detached.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "LinkName" })
  linkName: string;

  /**
   * The reference that identifies an object.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ParentReference" })
  @Type(() => DetachObjectRequestBodyParentReference)
  parentReference: DetachObjectRequestBodyParentReference;
}

export class DetachObjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: DetachObjectRequestBody;

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

  /**
   * The Amazon Resource Name (ARN) that is associated with the <a>Directory</a> where objects reside. For more information, see <a>arns</a>.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-amz-data-partition",
  })
  xAmzDataPartition: string;
}

export class DetachObjectResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: shared.AccessDeniedException;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  detachObjectResponse?: shared.DetachObjectResponse;

  /**
   * DirectoryNotEnabledException
   */
  @SpeakeasyMetadata()
  directoryNotEnabledException?: shared.DirectoryNotEnabledException;

  /**
   * InternalServiceException
   */
  @SpeakeasyMetadata()
  internalServiceException?: shared.InternalServiceException;

  /**
   * InvalidArnException
   */
  @SpeakeasyMetadata()
  invalidArnException?: shared.InvalidArnException;

  /**
   * LimitExceededException
   */
  @SpeakeasyMetadata()
  limitExceededException?: shared.LimitExceededException;

  /**
   * NotNodeException
   */
  @SpeakeasyMetadata()
  notNodeException?: shared.NotNodeException;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: shared.ResourceNotFoundException;

  /**
   * RetryableConflictException
   */
  @SpeakeasyMetadata()
  retryableConflictException?: shared.RetryableConflictException;

  /**
   * ValidationException
   */
  @SpeakeasyMetadata()
  validationException?: shared.ValidationException;
}
