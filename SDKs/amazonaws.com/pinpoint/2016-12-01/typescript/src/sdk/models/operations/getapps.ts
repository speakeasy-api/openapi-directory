/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetAppsRequest extends SpeakeasyBase {
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
   * The maximum number of items to include in each page of a paginated response. This parameter is not supported for application, campaign, and journey metrics.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page-size",
  })
  pageSize?: string;

  /**
   * The NextToken string that specifies which page of results to return in a paginated response.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=token" })
  token?: string;
}

export class GetAppsResponse extends SpeakeasyBase {
  /**
   * BadRequestException
   */
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * ForbiddenException
   */
  @SpeakeasyMetadata()
  forbiddenException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  getAppsResponse?: shared.GetAppsResponse;

  /**
   * InternalServerErrorException
   */
  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  /**
   * MethodNotAllowedException
   */
  @SpeakeasyMetadata()
  methodNotAllowedException?: any;

  /**
   * NotFoundException
   */
  @SpeakeasyMetadata()
  notFoundException?: any;

  /**
   * PayloadTooLargeException
   */
  @SpeakeasyMetadata()
  payloadTooLargeException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * TooManyRequestsException
   */
  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
