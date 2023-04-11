import { SpeakeasyBase } from "../../../internal/utils";
import { RdsDbClusterSnapshotAttributeValue } from "./rdsdbclustersnapshotattributevalue";
/**
 * The proposed access control configuration for an Amazon RDS DB cluster snapshot. You can propose a configuration for a new Amazon RDS DB cluster snapshot or an Amazon RDS DB cluster snapshot that you own by specifying the <code>RdsDbClusterSnapshotAttributeValue</code> and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_ModifyDBClusterSnapshotAttribute.html">ModifyDBClusterSnapshotAttribute</a>.
 */
export declare class RdsDbClusterSnapshotConfiguration extends SpeakeasyBase {
    attributes?: Record<string, RdsDbClusterSnapshotAttributeValue>;
    kmsKeyId?: string;
}
