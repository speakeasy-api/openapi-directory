/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum DescribeInterconnectLoaXAmzTargetEnum {
  OvertureServiceDescribeInterconnectLoa = "OvertureService.DescribeInterconnectLoa",
}

export class DescribeInterconnectLoaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  describeInterconnectLoaRequest: shared.DescribeInterconnectLoaRequest;

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
  xAmzTarget: DescribeInterconnectLoaXAmzTargetEnum;
}

export class DescribeInterconnectLoaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  describeInterconnectLoaResponse?: shared.DescribeInterconnectLoaResponse;

  /**
   * DirectConnectClientException
   */
  @SpeakeasyMetadata()
  directConnectClientException?: any;

  /**
   * DirectConnectServerException
   */
  @SpeakeasyMetadata()
  directConnectServerException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
