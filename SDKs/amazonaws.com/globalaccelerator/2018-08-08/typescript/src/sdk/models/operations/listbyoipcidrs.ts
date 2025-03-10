/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum ListByoipCidrsXAmzTargetEnum {
  GlobalAcceleratorV20180706ListByoipCidrs = "GlobalAccelerator_V20180706.ListByoipCidrs",
}

export class ListByoipCidrsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  listByoipCidrsRequest: shared.ListByoipCidrsRequest;

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
  xAmzTarget: ListByoipCidrsXAmzTargetEnum;
}

export class ListByoipCidrsResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalServiceErrorException
   */
  @SpeakeasyMetadata()
  internalServiceErrorException?: any;

  /**
   * InvalidArgumentException
   */
  @SpeakeasyMetadata()
  invalidArgumentException?: any;

  /**
   * InvalidNextTokenException
   */
  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  listByoipCidrsResponse?: shared.ListByoipCidrsResponse;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
