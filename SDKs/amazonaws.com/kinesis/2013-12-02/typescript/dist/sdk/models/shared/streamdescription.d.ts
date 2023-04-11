import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionTypeEnum } from "./encryptiontypeenum";
import { EnhancedMetrics } from "./enhancedmetrics";
import { Shard } from "./shard";
import { StreamModeDetails } from "./streammodedetails";
import { StreamStatusEnum } from "./streamstatusenum";
/**
 * Represents the output for <a>DescribeStream</a>.
 */
export declare class StreamDescription extends SpeakeasyBase {
    encryptionType?: EncryptionTypeEnum;
    enhancedMonitoring: EnhancedMetrics[];
    hasMoreShards: boolean;
    keyId?: string;
    retentionPeriodHours: number;
    shards: Shard[];
    streamARN: string;
    streamCreationTimestamp: Date;
    streamModeDetails?: StreamModeDetails;
    streamName: string;
    streamStatus: StreamStatusEnum;
}
