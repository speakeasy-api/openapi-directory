/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum DescribeConformancePackComplianceXAmzTargetEnum {
  StarlingDoveServiceDescribeConformancePackCompliance = "StarlingDoveService.DescribeConformancePackCompliance",
}

export class DescribeConformancePackComplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  describeConformancePackComplianceRequest: shared.DescribeConformancePackComplianceRequest;

  /**
   * Pagination limit
   */
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Limit" })
  limit?: string;

  /**
   * Pagination token
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=NextToken",
  })
  nextToken?: string;

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
  xAmzTarget: DescribeConformancePackComplianceXAmzTargetEnum;
}

export class DescribeConformancePackComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  describeConformancePackComplianceResponse?: shared.DescribeConformancePackComplianceResponse;

  /**
   * InvalidLimitException
   */
  @SpeakeasyMetadata()
  invalidLimitException?: any;

  /**
   * InvalidNextTokenException
   */
  @SpeakeasyMetadata()
  invalidNextTokenException?: any;

  /**
   * InvalidParameterValueException
   */
  @SpeakeasyMetadata()
  invalidParameterValueException?: any;

  /**
   * NoSuchConfigRuleInConformancePackException
   */
  @SpeakeasyMetadata()
  noSuchConfigRuleInConformancePackException?: any;

  /**
   * NoSuchConformancePackException
   */
  @SpeakeasyMetadata()
  noSuchConformancePackException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
