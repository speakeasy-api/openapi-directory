/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum DescribeConditionalForwardersXAmzTargetEnum {
  DirectoryService20150416DescribeConditionalForwarders = "DirectoryService_20150416.DescribeConditionalForwarders",
}

export class DescribeConditionalForwardersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  describeConditionalForwardersRequest: shared.DescribeConditionalForwardersRequest;

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
  xAmzTarget: DescribeConditionalForwardersXAmzTargetEnum;
}

export class DescribeConditionalForwardersResponse extends SpeakeasyBase {
  /**
   * ClientException
   */
  @SpeakeasyMetadata()
  clientException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  describeConditionalForwardersResult?: shared.DescribeConditionalForwardersResult;

  /**
   * DirectoryUnavailableException
   */
  @SpeakeasyMetadata()
  directoryUnavailableException?: any;

  /**
   * EntityDoesNotExistException
   */
  @SpeakeasyMetadata()
  entityDoesNotExistException?: any;

  /**
   * InvalidParameterException
   */
  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ServiceException
   */
  @SpeakeasyMetadata()
  serviceException?: any;

  /**
   * UnsupportedOperationException
   */
  @SpeakeasyMetadata()
  unsupportedOperationException?: any;
}
