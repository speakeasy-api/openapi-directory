/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum GETRemovePermissionActionEnum {
  RemovePermission = "RemovePermission",
}

export enum GETRemovePermissionVersionEnum {
  TwoThousandAndTwelve1105 = "2012-11-05",
}

export class GETRemovePermissionRequest extends SpeakeasyBase {
  /**
   * The AWS account number
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=AccountNumber",
  })
  accountNumber: number;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: GETRemovePermissionActionEnum;

  /**
   * The identification of the permission to remove. This is the label added using the <code> <a>AddPermission</a> </code> action.
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Label" })
  label: string;

  /**
   * The name of the queue
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=QueueName",
  })
  queueName: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: GETRemovePermissionVersionEnum;

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

export class GETRemovePermissionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
