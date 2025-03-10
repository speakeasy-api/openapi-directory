/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum DescribeFleetLocationAttributesXAmzTargetEnum {
  GameLiftDescribeFleetLocationAttributes = "GameLift.DescribeFleetLocationAttributes",
}

export class DescribeFleetLocationAttributesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  describeFleetLocationAttributesInput: shared.DescribeFleetLocationAttributesInput;

  /**
   * Pagination limit
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  /**
   * Pagination token
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=NextToken",
  })
  nextToken?: string;

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
  xAmzTarget: DescribeFleetLocationAttributesXAmzTargetEnum;
}

export class DescribeFleetLocationAttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  describeFleetLocationAttributesOutput?: shared.DescribeFleetLocationAttributesOutput;

  /**
   * InternalServiceException
   */
  @SpeakeasyMetadata()
  internalServiceException?: any;

  /**
   * InvalidRequestException
   */
  @SpeakeasyMetadata()
  invalidRequestException?: any;

  /**
   * NotFoundException
   */
  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * UnauthorizedException
   */
  @SpeakeasyMetadata()
  unauthorizedException?: any;

  /**
   * UnsupportedRegionException
   */
  @SpeakeasyMetadata()
  unsupportedRegionException?: any;
}
