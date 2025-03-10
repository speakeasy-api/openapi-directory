/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export class AttachPrincipalPolicyRequest extends SpeakeasyBase {
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
   * The policy name.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=policyName",
  })
  policyName: string;

  /**
   * The principal, which can be a certificate ARN (as returned from the CreateCertificate operation) or an Amazon Cognito ID.
   */
  @SpeakeasyMetadata({
    data: "header, style=simple;explode=false;name=x-amzn-iot-principal",
  })
  xAmznIotPrincipal: string;
}

export class AttachPrincipalPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalFailureException
   */
  @SpeakeasyMetadata()
  internalFailureException?: any;

  /**
   * InvalidRequestException
   */
  @SpeakeasyMetadata()
  invalidRequestException?: any;

  /**
   * LimitExceededException
   */
  @SpeakeasyMetadata()
  limitExceededException?: any;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  /**
   * ServiceUnavailableException
   */
  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;

  /**
   * UnauthorizedException
   */
  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
