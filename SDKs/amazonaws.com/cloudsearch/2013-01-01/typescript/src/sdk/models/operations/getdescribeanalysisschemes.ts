/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum GETDescribeAnalysisSchemesActionEnum {
  DescribeAnalysisSchemes = "DescribeAnalysisSchemes",
}

export enum GETDescribeAnalysisSchemesVersionEnum {
  TwoThousandAndThirteen0101 = "2013-01-01",
}

export class GETDescribeAnalysisSchemesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Action",
  })
  action: GETDescribeAnalysisSchemesActionEnum;

  /**
   * The analysis schemes you want to describe.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=AnalysisSchemeNames",
  })
  analysisSchemeNames?: string[];

  /**
   * Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Deployed",
  })
  deployed?: boolean;

  /**
   * The name of the domain you want to describe.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=DomainName",
  })
  domainName: string;

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=Version",
  })
  version: GETDescribeAnalysisSchemesVersionEnum;

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

export class GETDescribeAnalysisSchemesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
