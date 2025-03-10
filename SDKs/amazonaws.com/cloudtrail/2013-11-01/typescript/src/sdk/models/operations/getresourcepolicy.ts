/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum GetResourcePolicyXAmzTargetEnum {
  ComAmazonawsCloudtrailV20131101CloudTrail20131101GetResourcePolicy = "com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy",
}

export class GetResourcePolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  getResourcePolicyRequest: shared.GetResourcePolicyRequest;

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
  xAmzTarget: GetResourcePolicyXAmzTargetEnum;
}

export class GetResourcePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  getResourcePolicyResponse?: shared.GetResourcePolicyResponse;

  /**
   * OperationNotPermittedException
   */
  @SpeakeasyMetadata()
  operationNotPermittedException?: any;

  /**
   * ResourceARNNotValidException
   */
  @SpeakeasyMetadata()
  resourceARNNotValidException?: any;

  /**
   * ResourcePolicyNotFoundException
   */
  @SpeakeasyMetadata()
  resourcePolicyNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  /**
   * ResourceTypeNotSupportedException
   */
  @SpeakeasyMetadata()
  resourceTypeNotSupportedException?: any;

  /**
   * UnsupportedOperationException
   */
  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
