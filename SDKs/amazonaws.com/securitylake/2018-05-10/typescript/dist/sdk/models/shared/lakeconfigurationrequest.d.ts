import { SpeakeasyBase } from "../../../internal/utils";
import { RegionEnum } from "./regionenum";
import { RetentionSetting } from "./retentionsetting";
/**
 * Provides details of Amazon Security Lake configuration object.
 */
export declare class LakeConfigurationRequest extends SpeakeasyBase {
    encryptionKey?: string;
    replicationDestinationRegions?: RegionEnum[];
    replicationRoleArn?: string;
    retentionSettings?: RetentionSetting[];
    tagsMap?: Record<string, string>;
}
