import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains the configuration information of alarm state changes.
 */
export declare class UpdateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
    acknowledgeFlow?: shared.AcknowledgeFlow;
    initializationConfiguration?: shared.InitializationConfiguration;
}
/**
 * Contains information about one or more alarm actions.
 */
export declare class UpdateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
    alarmActions?: shared.AlarmAction[];
}
/**
 * Contains information about one or more notification actions.
 */
export declare class UpdateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
    notificationActions?: shared.NotificationAction[];
}
/**
 * Defines when your alarm is invoked.
 */
export declare class UpdateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
    simpleRule?: shared.SimpleRule;
}
export declare class UpdateAlarmModelRequestBody extends SpeakeasyBase {
    /**
     * Contains the configuration information of alarm state changes.
     */
    alarmCapabilities?: UpdateAlarmModelRequestBodyAlarmCapabilities;
    /**
     * Contains information about one or more alarm actions.
     */
    alarmEventActions?: UpdateAlarmModelRequestBodyAlarmEventActions;
    /**
     * The description of the alarm model.
     */
    alarmModelDescription?: string;
    /**
     * Contains information about one or more notification actions.
     */
    alarmNotification?: UpdateAlarmModelRequestBodyAlarmNotification;
    /**
     * Defines when your alarm is invoked.
     */
    alarmRule: UpdateAlarmModelRequestBodyAlarmRule;
    /**
     * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
     */
    roleArn: string;
    /**
     * A non-negative integer that reflects the severity level of the alarm.
     */
    severity?: number;
}
export declare class UpdateAlarmModelRequest extends SpeakeasyBase {
    requestBody: UpdateAlarmModelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The name of the alarm model.
     */
    alarmModelName: string;
}
export declare class UpdateAlarmModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateAlarmModelResponse?: shared.UpdateAlarmModelResponse;
}
