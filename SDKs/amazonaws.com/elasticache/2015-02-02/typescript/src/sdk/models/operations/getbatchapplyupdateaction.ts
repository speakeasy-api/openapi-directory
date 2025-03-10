/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum GETBatchApplyUpdateActionActionEnum {
  BatchApplyUpdateAction = "BatchApplyUpdateAction",
}

export enum GETBatchApplyUpdateActionVersionEnum {
  TwoThousandAndFifteen0202 = "2015-02-02",
}

export class GETBatchApplyUpdateActionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: GETBatchApplyUpdateActionActionEnum;

  /**
   * The cache cluster IDs
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=CacheClusterIds",
  })
  cacheClusterIds?: string[];

  /**
   * The replication group IDs
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=ReplicationGroupIds",
  })
  replicationGroupIds?: string[];

  /**
   * The unique ID of the service update
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=ServiceUpdateName",
  })
  serviceUpdateName: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: GETBatchApplyUpdateActionVersionEnum;

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

export class GETBatchApplyUpdateActionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
