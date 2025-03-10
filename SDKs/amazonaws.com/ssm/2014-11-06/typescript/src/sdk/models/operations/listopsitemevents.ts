/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum ListOpsItemEventsXAmzTargetEnum {
  AmazonSSMListOpsItemEvents = "AmazonSSM.ListOpsItemEvents",
}

export class ListOpsItemEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  listOpsItemEventsRequest: shared.ListOpsItemEventsRequest;

  /**
   * Pagination limit
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=MaxResults",
  })
  maxResults?: string;

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
  xAmzTarget: ListOpsItemEventsXAmzTargetEnum;
}

export class ListOpsItemEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalServerError
   */
  @SpeakeasyMetadata()
  internalServerError?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  listOpsItemEventsResponse?: shared.ListOpsItemEventsResponse;

  /**
   * OpsItemInvalidParameterException
   */
  @SpeakeasyMetadata()
  opsItemInvalidParameterException?: any;

  /**
   * OpsItemLimitExceededException
   */
  @SpeakeasyMetadata()
  opsItemLimitExceededException?: any;

  /**
   * OpsItemNotFoundException
   */
  @SpeakeasyMetadata()
  opsItemNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
