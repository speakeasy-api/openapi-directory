/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Contains the configuration information of alarm state changes.
 */
export class UpdateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "acknowledgeFlow" })
  @Type(() => shared.AcknowledgeFlow)
  acknowledgeFlow?: shared.AcknowledgeFlow;

  @SpeakeasyMetadata()
  @Expose({ name: "initializationConfiguration" })
  @Type(() => shared.InitializationConfiguration)
  initializationConfiguration?: shared.InitializationConfiguration;
}

/**
 * Contains information about one or more alarm actions.
 */
export class UpdateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AlarmAction })
  @Expose({ name: "alarmActions" })
  @Type(() => shared.AlarmAction)
  alarmActions?: shared.AlarmAction[];
}

/**
 * Contains information about one or more notification actions.
 */
export class UpdateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.NotificationAction })
  @Expose({ name: "notificationActions" })
  @Type(() => shared.NotificationAction)
  notificationActions?: shared.NotificationAction[];
}

/**
 * Defines when your alarm is invoked.
 */
export class UpdateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "simpleRule" })
  @Type(() => shared.SimpleRule)
  simpleRule?: shared.SimpleRule;
}

export class UpdateAlarmModelRequestBody extends SpeakeasyBase {
  /**
   * Contains the configuration information of alarm state changes.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alarmCapabilities" })
  @Type(() => UpdateAlarmModelRequestBodyAlarmCapabilities)
  alarmCapabilities?: UpdateAlarmModelRequestBodyAlarmCapabilities;

  /**
   * Contains information about one or more alarm actions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alarmEventActions" })
  @Type(() => UpdateAlarmModelRequestBodyAlarmEventActions)
  alarmEventActions?: UpdateAlarmModelRequestBodyAlarmEventActions;

  /**
   * The description of the alarm model.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alarmModelDescription" })
  alarmModelDescription?: string;

  /**
   * Contains information about one or more notification actions.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alarmNotification" })
  @Type(() => UpdateAlarmModelRequestBodyAlarmNotification)
  alarmNotification?: UpdateAlarmModelRequestBodyAlarmNotification;

  /**
   * Defines when your alarm is invoked.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "alarmRule" })
  @Type(() => UpdateAlarmModelRequestBodyAlarmRule)
  alarmRule: UpdateAlarmModelRequestBodyAlarmRule;

  /**
   * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "roleArn" })
  roleArn: string;

  /**
   * A non-negative integer that reflects the severity level of the alarm.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "severity" })
  severity?: number;
}

export class UpdateAlarmModelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requestBody: UpdateAlarmModelRequestBody;

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

  /**
   * The name of the alarm model.
   */
  @SpeakeasyMetadata({
    data: "pathParam, style=simple;explode=false;name=alarmModelName",
  })
  alarmModelName: string;
}

export class UpdateAlarmModelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  /**
   * InternalFailureException
   */
  @SpeakeasyMetadata()
  internalFailureException?: any;

  /**
   * InvalidRequestException
   */
  @SpeakeasyMetadata()
  invalidRequestException?: any;

  /**
   * ResourceInUseException
   */
  @SpeakeasyMetadata()
  resourceInUseException?: any;

  /**
   * ResourceNotFoundException
   */
  @SpeakeasyMetadata()
  resourceNotFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;

  /**
   * ServiceUnavailableException
   */
  @SpeakeasyMetadata()
  serviceUnavailableException?: any;

  /**
   * ThrottlingException
   */
  @SpeakeasyMetadata()
  throttlingException?: any;

  /**
   * Success
   */
  @SpeakeasyMetadata()
  updateAlarmModelResponse?: shared.UpdateAlarmModelResponse;
}
