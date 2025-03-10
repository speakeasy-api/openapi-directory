/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum UpdateSecurityPolicyXAmzTargetEnum {
  OpenSearchServerlessUpdateSecurityPolicy = "OpenSearchServerless.UpdateSecurityPolicy",
}

export class UpdateSecurityPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  updateSecurityPolicyRequest: shared.UpdateSecurityPolicyRequest;

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
  xAmzTarget: UpdateSecurityPolicyXAmzTargetEnum;
}

export class UpdateSecurityPolicyResponse extends SpeakeasyBase {
  /**
   * ConflictException
   */
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalServerException
   */
  @SpeakeasyMetadata()
  internalServerException?: any;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  /**
   * ServiceQuotaExceededException
   */
  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  updateSecurityPolicyResponse?: shared.UpdateSecurityPolicyResponse;

  /**
   * ValidationException
   */
  @SpeakeasyMetadata()
  validationException?: any;
}
