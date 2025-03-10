/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum GETModifyDBSubnetGroupActionEnum {
  ModifyDBSubnetGroup = "ModifyDBSubnetGroup",
}

export enum GETModifyDBSubnetGroupVersionEnum {
  TwoThousandAndThirteen0909 = "2013-09-09",
}

export class GETModifyDBSubnetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: GETModifyDBSubnetGroupActionEnum;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DBSubnetGroupDescription",
  })
  dbSubnetGroupDescription?: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DBSubnetGroupName",
  })
  dbSubnetGroupName: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=SubnetIds",
  })
  subnetIds: string[];

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: GETModifyDBSubnetGroupVersionEnum;

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

export class GETModifyDBSubnetGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
