/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum DescribeMatchmakingConfigurationsXAmzTargetEnum {
  GameLiftDescribeMatchmakingConfigurations = "GameLift.DescribeMatchmakingConfigurations",
}

export class DescribeMatchmakingConfigurationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  describeMatchmakingConfigurationsInput: shared.DescribeMatchmakingConfigurationsInput;

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
  xAmzTarget: DescribeMatchmakingConfigurationsXAmzTargetEnum;
}

export class DescribeMatchmakingConfigurationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  describeMatchmakingConfigurationsOutput?: shared.DescribeMatchmakingConfigurationsOutput;

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

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * UnsupportedRegionException
   */
  @SpeakeasyMetadata()
  unsupportedRegionException?: any;
}
