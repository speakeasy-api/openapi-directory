/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class StopJobRequest extends SpeakeasyBase {
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
   *  The unique ID for an Amplify app.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=appId",
  })
  appId: string;

  /**
   *  The name for the branch, for the job.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=branchName",
  })
  branchName: string;

  /**
   *  The unique id for the job.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=jobId",
  })
  jobId: string;
}

export class StopJobResponse extends SpeakeasyBase {
  /**
   * BadRequestException
   */
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalFailureException
   */
  @SpeakeasyMetadata()
  internalFailureException?: any;

  /**
   * LimitExceededException
   */
  @SpeakeasyMetadata()
  limitExceededException?: any;

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
   * Success
   */
  @SpeakeasyMetadata()
  stopJobResult?: shared.StopJobResult;

  /**
   * UnauthorizedException
   */
  @SpeakeasyMetadata()
  unauthorizedException?: any;
}
