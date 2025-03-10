/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum DetectDocumentTextXAmzTargetEnum {
  TextractDetectDocumentText = "Textract.DetectDocumentText",
}

export class DetectDocumentTextRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  detectDocumentTextRequest: shared.DetectDocumentTextRequest;

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
  xAmzTarget: DetectDocumentTextXAmzTargetEnum;
}

export class DetectDocumentTextResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  /**
   * BadDocumentException
   */
  @SpeakeasyMetadata()
  badDocumentException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  detectDocumentTextResponse?: shared.DetectDocumentTextResponse;

  /**
   * DocumentTooLargeException
   */
  @SpeakeasyMetadata()
  documentTooLargeException?: any;

  /**
   * InternalServerError
   */
  @SpeakeasyMetadata()
  internalServerError?: any;

  /**
   * InvalidParameterException
   */
  @SpeakeasyMetadata()
  invalidParameterException?: any;

  /**
   * InvalidS3ObjectException
   */
  @SpeakeasyMetadata()
  invalidS3ObjectException?: any;

  /**
   * ProvisionedThroughputExceededException
   */
  @SpeakeasyMetadata()
  provisionedThroughputExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;

  /**
   * UnsupportedDocumentException
   */
  @SpeakeasyMetadata()
  unsupportedDocumentException?: any;
}
