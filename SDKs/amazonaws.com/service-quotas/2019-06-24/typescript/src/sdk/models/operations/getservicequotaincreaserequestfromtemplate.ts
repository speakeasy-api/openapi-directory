/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export enum GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum {
  ServiceQuotasV20190624GetServiceQuotaIncreaseRequestFromTemplate = "ServiceQuotasV20190624.GetServiceQuotaIncreaseRequestFromTemplate",
}

export class GetServiceQuotaIncreaseRequestFromTemplateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  getServiceQuotaIncreaseRequestFromTemplateRequest: shared.GetServiceQuotaIncreaseRequestFromTemplateRequest;

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
  xAmzTarget: GetServiceQuotaIncreaseRequestFromTemplateXAmzTargetEnum;
}

export class GetServiceQuotaIncreaseRequestFromTemplateResponse extends SpeakeasyBase {
  /**
   * AWSServiceAccessNotEnabledException
   */
  @SpeakeasyMetadata()
  awsServiceAccessNotEnabledException?: any;

  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * DependencyAccessDeniedException
   */
  @SpeakeasyMetadata()
  dependencyAccessDeniedException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  getServiceQuotaIncreaseRequestFromTemplateResponse?: shared.GetServiceQuotaIncreaseRequestFromTemplateResponse;

  /**
   * IllegalArgumentException
   */
  @SpeakeasyMetadata()
  illegalArgumentException?: any;

  /**
   * NoAvailableOrganizationException
   */
  @SpeakeasyMetadata()
  noAvailableOrganizationException?: any;

  /**
   * NoSuchResourceException
   */
  @SpeakeasyMetadata()
  noSuchResourceException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ServiceException
   */
  @SpeakeasyMetadata()
  serviceException?: any;

  /**
   * TemplatesNotAvailableInRegionException
   */
  @SpeakeasyMetadata()
  templatesNotAvailableInRegionException?: any;

  /**
   * TooManyRequestsException
   */
  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
