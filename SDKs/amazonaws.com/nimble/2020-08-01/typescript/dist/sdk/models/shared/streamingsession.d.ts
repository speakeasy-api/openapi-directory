import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticTerminationModeEnum } from "./automaticterminationmodeenum";
import { SessionBackupModeEnum } from "./sessionbackupmodeenum";
import { SessionPersistenceModeEnum } from "./sessionpersistencemodeenum";
import { StreamingSessionStateEnum } from "./streamingsessionstateenum";
import { StreamingSessionStatusCodeEnum } from "./streamingsessionstatuscodeenum";
import { VolumeConfiguration } from "./volumeconfiguration";
import { VolumeRetentionModeEnum } from "./volumeretentionmodeenum";
/**
 * A streaming session is a virtual workstation created using a particular launch profile.
 */
export declare class StreamingSession extends SpeakeasyBase {
    arn?: string;
    automaticTerminationMode?: AutomaticTerminationModeEnum;
    backupMode?: SessionBackupModeEnum;
    createdAt?: Date;
    createdBy?: string;
    ec2InstanceType?: string;
    launchProfileId?: string;
    maxBackupsToRetain?: number;
    ownedBy?: string;
    sessionId?: string;
    sessionPersistenceMode?: SessionPersistenceModeEnum;
    startedAt?: Date;
    startedBy?: string;
    startedFromBackupId?: string;
    state?: StreamingSessionStateEnum;
    statusCode?: StreamingSessionStatusCodeEnum;
    statusMessage?: string;
    stopAt?: Date;
    stoppedAt?: Date;
    stoppedBy?: string;
    streamingImageId?: string;
    tags?: Record<string, string>;
    terminateAt?: Date;
    updatedAt?: Date;
    updatedBy?: string;
    volumeConfiguration?: VolumeConfiguration;
    volumeRetentionMode?: VolumeRetentionModeEnum;
}
