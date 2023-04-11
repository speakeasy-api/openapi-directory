import { SpeakeasyBase } from "../../../internal/utils";
import { AutomaticTerminationModeEnum } from "./automaticterminationmodeenum";
import { SessionPersistenceModeEnum } from "./sessionpersistencemodeenum";
import { StreamConfigurationSessionBackup } from "./streamconfigurationsessionbackup";
import { StreamConfigurationSessionStorage } from "./streamconfigurationsessionstorage";
import { StreamingClipboardModeEnum } from "./streamingclipboardmodeenum";
import { StreamingInstanceTypeEnum } from "./streaminginstancetypeenum";
import { VolumeConfiguration } from "./volumeconfiguration";
/**
 * A configuration for a streaming session.
 */
export declare class StreamConfiguration extends SpeakeasyBase {
    automaticTerminationMode?: AutomaticTerminationModeEnum;
    clipboardMode: StreamingClipboardModeEnum;
    ec2InstanceTypes: StreamingInstanceTypeEnum[];
    maxSessionLengthInMinutes?: number;
    maxStoppedSessionLengthInMinutes?: number;
    sessionBackup?: StreamConfigurationSessionBackup;
    sessionPersistenceMode?: SessionPersistenceModeEnum;
    sessionStorage?: StreamConfigurationSessionStorage;
    streamingImageIds: string[];
    volumeConfiguration?: VolumeConfiguration;
}
