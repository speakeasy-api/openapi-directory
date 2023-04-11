import { SpeakeasyBase } from "../../../internal/utils";
import { RegionEnum } from "./regionenum";
import { RetentionSetting } from "./retentionsetting";
import { SettingsStatusEnum } from "./settingsstatusenum";
import { UpdateStatus } from "./updatestatus";
/**
 * Provides details of Amazon Security Lake lake configuration object.
 */
export declare class LakeConfigurationResponse extends SpeakeasyBase {
    encryptionKey?: string;
    replicationDestinationRegions?: RegionEnum[];
    replicationRoleArn?: string;
    retentionSettings?: RetentionSetting[];
    s3BucketArn?: string;
    status?: SettingsStatusEnum;
    tagsMap?: Record<string, string>;
    updateStatus?: UpdateStatus;
}
