/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum POSTUpdateJobActionEnum {
  UpdateJob = "UpdateJob",
}

export enum POSTUpdateJobOperationEnum {
  UpdateJob = "UpdateJob",
}

export enum POSTUpdateJobVersionEnum {
  TwoThousandAndTen0601 = "2010-06-01",
}

export class POSTUpdateJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=AWSAccessKeyId",
  })
  awsAccessKeyId: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: POSTUpdateJobActionEnum;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Operation",
  })
  operation: POSTUpdateJobOperationEnum;

  @SpeakeasyMetadata({ data: "request, media_type=text/xml" })
  requestBody?: Uint8Array;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Signature",
  })
  signature: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=SignatureMethod",
  })
  signatureMethod: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=SignatureVersion",
  })
  signatureVersion: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Timestamp",
  })
  timestamp: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: POSTUpdateJobVersionEnum;
}

export class POSTUpdateJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
