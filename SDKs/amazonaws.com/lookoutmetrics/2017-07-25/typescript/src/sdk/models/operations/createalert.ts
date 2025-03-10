/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * A configuration that specifies the action to perform when anomalies are detected.
 */
export class CreateAlertRequestBodyAction extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "LambdaConfiguration" })
  @Type(() => shared.LambdaConfiguration)
  lambdaConfiguration?: shared.LambdaConfiguration;

  @SpeakeasyMetadata()
  @Expose({ name: "SNSConfiguration" })
  @Type(() => shared.SNSConfiguration)
  snsConfiguration?: shared.SNSConfiguration;
}

/**
 * The configuration of the alert filters.
 */
export class CreateAlertRequestBodyAlertFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.DimensionFilter })
  @Expose({ name: "DimensionFilterList" })
  @Type(() => shared.DimensionFilter)
  dimensionFilterList?: shared.DimensionFilter[];

  @SpeakeasyMetadata()
  @Expose({ name: "MetricList" })
  metricList?: string[];
}

export class CreateAlertRequestBody extends SpeakeasyBase {
  /**
   * A configuration that specifies the action to perform when anomalies are detected.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Action" })
  @Type(() => CreateAlertRequestBodyAction)
  action: CreateAlertRequestBodyAction;

  /**
   * A description of the alert.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "AlertDescription" })
  alertDescription?: string;

  /**
   * The configuration of the alert filters.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "AlertFilters" })
  @Type(() => CreateAlertRequestBodyAlertFilters)
  alertFilters?: CreateAlertRequestBodyAlertFilters;

  /**
   * The name of the alert.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "AlertName" })
  alertName: string;

  /**
   * An integer from 0 to 100 specifying the alert sensitivity threshold.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "AlertSensitivityThreshold" })
  alertSensitivityThreshold?: number;

  /**
   * The ARN of the detector to which the alert is attached.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "AnomalyDetectorArn" })
  anomalyDetectorArn: string;

  /**
   * A list of <a href="https://docs.aws.amazon.com/lookoutmetrics/latest/dev/detectors-tags.html">tags</a> to apply to the alert.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "Tags" })
  tags?: Record<string, string>;
}

export class CreateAlertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: CreateAlertRequestBody;

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

export class CreateAlertResponse extends SpeakeasyBase {
  /**
   * AccessDeniedException
   */
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  /**
   * ConflictException
   */
  @SpeakeasyMetadata()
  conflictException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  createAlertResponse?: shared.CreateAlertResponse;

  /**
   * InternalServerException
   */
  @SpeakeasyMetadata()
  internalServerException?: any;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  /**
   * ServiceQuotaExceededException
   */
  @SpeakeasyMetadata()
  serviceQuotaExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * TooManyRequestsException
   */
  @SpeakeasyMetadata()
  tooManyRequestsException?: any;

  /**
   * ValidationException
   */
  @SpeakeasyMetadata()
  validationException?: any;
}
