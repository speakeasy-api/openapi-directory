import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { AlarmStateInformation } from "./alarmstateinformation";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { CommandStatusEnum } from "./commandstatusenum";
import { NotificationConfig } from "./notificationconfig";
import { Target } from "./target";
/**
 * Describes a command request.
 */
export declare class Command extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    cloudWatchOutputConfig?: CloudWatchOutputConfig;
    commandId?: string;
    comment?: string;
    completedCount?: number;
    deliveryTimedOutCount?: number;
    documentName?: string;
    documentVersion?: string;
    errorCount?: number;
    expiresAfter?: Date;
    instanceIds?: string[];
    maxConcurrency?: string;
    maxErrors?: string;
    notificationConfig?: NotificationConfig;
    outputS3BucketName?: string;
    outputS3KeyPrefix?: string;
    outputS3Region?: string;
    parameters?: Record<string, string[]>;
    requestedDateTime?: Date;
    serviceRole?: string;
    status?: CommandStatusEnum;
    statusDetails?: string;
    targetCount?: number;
    targets?: Target[];
    timeoutSeconds?: number;
    triggeredAlarms?: AlarmStateInformation[];
}
