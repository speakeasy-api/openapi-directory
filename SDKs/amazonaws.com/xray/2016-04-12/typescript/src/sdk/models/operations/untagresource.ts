/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class UntagResourceRequestBody extends SpeakeasyBase {
  /**
   * The Amazon Resource Number (ARN) of an X-Ray group or sampling rule.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "ResourceARN" })
  resourceARN: string;

  /**
   * Keys for one or more tags that you want to remove from an X-Ray group or sampling rule.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "TagKeys" })
  tagKeys: string[];
}

export class UntagResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: UntagResourceRequestBody;

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

export class UntagResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InvalidRequestException
   */
  @SpeakeasyMetadata()
  invalidRequestException?: any;

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
   * ThrottledException
   */
  @SpeakeasyMetadata()
  throttledException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  untagResourceResponse?: Record<string, any>;
}
