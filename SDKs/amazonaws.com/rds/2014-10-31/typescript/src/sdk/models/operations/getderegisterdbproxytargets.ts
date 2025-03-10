/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum GETDeregisterDBProxyTargetsActionEnum {
  DeregisterDBProxyTargets = "DeregisterDBProxyTargets",
}

export enum GETDeregisterDBProxyTargetsVersionEnum {
  TwoThousandAndFourteen1031 = "2014-10-31",
}

export class GETDeregisterDBProxyTargetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: GETDeregisterDBProxyTargetsActionEnum;

  /**
   * One or more DB cluster identifiers.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DBClusterIdentifiers",
  })
  dbClusterIdentifiers?: string[];

  /**
   * One or more DB instance identifiers.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DBInstanceIdentifiers",
  })
  dbInstanceIdentifiers?: string[];

  /**
   * The identifier of the <code>DBProxy</code> that is associated with the <code>DBProxyTargetGroup</code>.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DBProxyName",
  })
  dbProxyName: string;

  /**
   * The identifier of the <code>DBProxyTargetGroup</code>.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=TargetGroupName",
  })
  targetGroupName?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: GETDeregisterDBProxyTargetsVersionEnum;

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

export class GETDeregisterDBProxyTargetsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
