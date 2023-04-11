import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Contains the configuration information of alarm state changes.
 */
export declare class CreateAlarmModelRequestBodyAlarmCapabilities extends SpeakeasyBase {
    acknowledgeFlow?: shared.AcknowledgeFlow;
    initializationConfiguration?: shared.InitializationConfiguration;
}
/**
 * Contains information about one or more alarm actions.
 */
export declare class CreateAlarmModelRequestBodyAlarmEventActions extends SpeakeasyBase {
    alarmActions?: shared.AlarmAction[];
}
/**
 * Contains information about one or more notification actions.
 */
export declare class CreateAlarmModelRequestBodyAlarmNotification extends SpeakeasyBase {
    notificationActions?: shared.NotificationAction[];
}
/**
 * Defines when your alarm is invoked.
 */
export declare class CreateAlarmModelRequestBodyAlarmRule extends SpeakeasyBase {
    simpleRule?: shared.SimpleRule;
}
export declare class CreateAlarmModelRequestBody extends SpeakeasyBase {
    /**
     * Contains the configuration information of alarm state changes.
     */
    alarmCapabilities?: CreateAlarmModelRequestBodyAlarmCapabilities;
    /**
     * Contains information about one or more alarm actions.
     */
    alarmEventActions?: CreateAlarmModelRequestBodyAlarmEventActions;
    /**
     * A description that tells you what the alarm model detects.
     */
    alarmModelDescription?: string;
    /**
     * A unique name that helps you identify the alarm model. You can't change this name after you create the alarm model.
     */
    alarmModelName: string;
    /**
     * Contains information about one or more notification actions.
     */
    alarmNotification?: CreateAlarmModelRequestBodyAlarmNotification;
    /**
     * Defines when your alarm is invoked.
     */
    alarmRule: CreateAlarmModelRequestBodyAlarmRule;
    /**
     * An input attribute used as a key to create an alarm. AWS IoT Events routes <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html">inputs</a> associated with this key to the alarm.
     */
    key?: string;
    /**
     * The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names (ARNs)</a> in the <i>AWS General Reference</i>.
     */
    roleArn: string;
    /**
     * A non-negative integer that reflects the severity level of the alarm.
     */
    severity?: number;
    /**
     * <p>A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html">Tagging your AWS IoT Events resources</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>You can create up to 50 tags for one alarm model.</p>
     */
    tags?: shared.Tag[];
}
export declare class CreateAlarmModelRequest extends SpeakeasyBase {
    requestBody: CreateAlarmModelRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateAlarmModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createAlarmModelResponse?: shared.CreateAlarmModelResponse;
    /**
     * InternalFailureException
     */
    internalFailureException?: any;
    /**
     * InvalidRequestException
     */
    invalidRequestException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ResourceAlreadyExistsException
     */
    resourceAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
