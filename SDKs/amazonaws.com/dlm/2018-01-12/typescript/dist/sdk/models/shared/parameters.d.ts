import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * <p> <b>[Snapshot and AMI policies only]</b> Specifies optional parameters for snapshot and AMI policies. The set of valid parameters depends on the combination of policy type and target resource type.</p> <p>If you choose to exclude boot volumes and you specify tags that consequently exclude all of the additional data volumes attached to an instance, then Amazon Data Lifecycle Manager will not create any snapshots for the affected instance, and it will emit a <code>SnapshotsCreateFailed</code> Amazon CloudWatch metric. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitor-dlm-cw-metrics.html">Monitor your policies using Amazon CloudWatch</a>.</p>
 */
export declare class ParametersT extends SpeakeasyBase {
    excludeBootVolume?: boolean;
    excludeDataVolumeTags?: Tag[];
    noReboot?: boolean;
}
