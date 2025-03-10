/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose } from "class-transformer";

export class BeginTransactionRequestBody extends SpeakeasyBase {
  /**
   * The name of the database.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "database" })
  database?: string;

  /**
   * The Amazon Resource Name (ARN) of the Aurora Serverless DB cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "resourceArn" })
  resourceArn: string;

  /**
   * The name of the database schema.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "schema" })
  schema?: string;

  /**
   * The name or ARN of the secret that enables access to the DB cluster.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "secretArn" })
  secretArn: string;
}

export class BeginTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: BeginTransactionRequestBody;

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

export class BeginTransactionResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  /**
   * BadRequestException
   */
  @SpeakeasyMetadata()
  badRequestException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  beginTransactionResponse?: shared.BeginTransactionResponse;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * ForbiddenException
   */
  @SpeakeasyMetadata()
  forbiddenException?: any;

  /**
   * InternalServerErrorException
   */
  @SpeakeasyMetadata()
  internalServerErrorException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ServiceUnavailableError
   */
  @SpeakeasyMetadata()
  serviceUnavailableError?: any;

  /**
   * StatementTimeoutException
   */
  @SpeakeasyMetadata()
  statementTimeoutException?: any;
}
