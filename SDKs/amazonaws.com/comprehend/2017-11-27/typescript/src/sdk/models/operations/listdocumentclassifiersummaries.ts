/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum ListDocumentClassifierSummariesXAmzTargetEnum {
  Comprehend20171127ListDocumentClassifierSummaries = "Comprehend_20171127.ListDocumentClassifierSummaries",
}

export class ListDocumentClassifierSummariesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  listDocumentClassifierSummariesRequest: shared.ListDocumentClassifierSummariesRequest;

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
  xAmzTarget: ListDocumentClassifierSummariesXAmzTargetEnum;
}

export class ListDocumentClassifierSummariesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalServerException
   */
  @SpeakeasyMetadata()
  internalServerException?: any;

  /**
   * InvalidRequestException
   */
  @SpeakeasyMetadata()
  invalidRequestException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  listDocumentClassifierSummariesResponse?: shared.ListDocumentClassifierSummariesResponse;

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
