import { SpeakeasyBase } from "../../../internal/utils";
import { DestinationConfiguration } from "./destinationconfiguration";
import { RecordingConfigurationStateEnum } from "./recordingconfigurationstateenum";
import { ThumbnailConfiguration } from "./thumbnailconfiguration";
/**
 * An object representing a configuration to record a channel stream.
 */
export declare class RecordingConfiguration extends SpeakeasyBase {
    arn: string;
    destinationConfiguration: DestinationConfiguration;
    name?: string;
    recordingReconnectWindowSeconds?: number;
    state: RecordingConfigurationStateEnum;
    tags?: Record<string, string>;
    thumbnailConfiguration?: ThumbnailConfiguration;
}
