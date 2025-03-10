/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum ModifyReplicationTaskXAmzTargetEnum {
  AmazonDMSv20160101ModifyReplicationTask = "AmazonDMSv20160101.ModifyReplicationTask",
}

export class ModifyReplicationTaskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  modifyReplicationTaskMessage: shared.ModifyReplicationTaskMessage;

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
  xAmzTarget: ModifyReplicationTaskXAmzTargetEnum;
}

export class ModifyReplicationTaskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InvalidResourceStateFault
   */
  @SpeakeasyMetadata()
  invalidResourceStateFault?: any;

  /**
   * KMSKeyNotAccessibleFault
   */
  @SpeakeasyMetadata()
  kmsKeyNotAccessibleFault?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  modifyReplicationTaskResponse?: shared.ModifyReplicationTaskResponse;

  /**
   * ResourceAlreadyExistsFault
   */
  @SpeakeasyMetadata()
  resourceAlreadyExistsFault?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ResourceNotFoundFault
   */
  @SpeakeasyMetadata()
  resourceNotFoundFault?: any;
}
