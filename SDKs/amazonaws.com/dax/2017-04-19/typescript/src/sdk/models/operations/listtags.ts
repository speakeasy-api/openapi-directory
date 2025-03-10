/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum ListTagsXAmzTargetEnum {
  AmazonDaxv3ListTags = "AmazonDAXV3.ListTags",
}

export class ListTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  listTagsRequest: shared.ListTagsRequest;

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
  xAmzTarget: ListTagsXAmzTargetEnum;
}

export class ListTagsResponse extends SpeakeasyBase {
  /**
   * ClusterNotFoundFault
   */
  @SpeakeasyMetadata()
  clusterNotFoundFault?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InvalidARNFault
   */
  @SpeakeasyMetadata()
  invalidARNFault?: any;

  /**
   * InvalidClusterStateFault
   */
  @SpeakeasyMetadata()
  invalidClusterStateFault?: any;

  /**
   * InvalidParameterCombinationException
   */
  @SpeakeasyMetadata()
  invalidParameterCombinationException?: any;

  /**
   * InvalidParameterValueException
   */
  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  listTagsResponse?: shared.ListTagsResponse;

  /**
   * ServiceLinkedRoleNotFoundFault
   */
  @SpeakeasyMetadata()
  serviceLinkedRoleNotFoundFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
