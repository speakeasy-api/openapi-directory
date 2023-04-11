import { SpeakeasyBase } from "../../../internal/utils";
import { AlarmConfiguration } from "./alarmconfiguration";
import { CloudWatchOutputConfig } from "./cloudwatchoutputconfig";
import { DocumentHashTypeEnum } from "./documenthashtypeenum";
import { NotificationConfig } from "./notificationconfig";
import { Target } from "./target";
export declare class SendCommandRequest extends SpeakeasyBase {
    alarmConfiguration?: AlarmConfiguration;
    cloudWatchOutputConfig?: CloudWatchOutputConfig;
    comment?: string;
    documentHash?: string;
    documentHashType?: DocumentHashTypeEnum;
    documentName: string;
    documentVersion?: string;
    instanceIds?: string[];
    maxConcurrency?: string;
    maxErrors?: string;
    notificationConfig?: NotificationConfig;
    outputS3BucketName?: string;
    outputS3KeyPrefix?: string;
    outputS3Region?: string;
    parameters?: Record<string, string[]>;
    serviceRoleArn?: string;
    targets?: Target[];
    timeoutSeconds?: number;
}
