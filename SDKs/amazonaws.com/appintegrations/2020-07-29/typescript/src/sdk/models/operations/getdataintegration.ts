/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetDataIntegrationRequest extends SpeakeasyBase {
  /**
   * A unique identifier.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=Identifier",
  })
  identifier: string;

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
}

export class GetDataIntegrationResponse extends SpeakeasyBase {
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
  getDataIntegrationResponse?: shared.GetDataIntegrationResponse;

  /**
   * InternalServiceError
   */
  @SpeakeasyMetadata()
  internalServiceError?: any;

  /**
   * InvalidRequestException
   */
  @SpeakeasyMetadata()
  invalidRequestException?: any;

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
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;
}
