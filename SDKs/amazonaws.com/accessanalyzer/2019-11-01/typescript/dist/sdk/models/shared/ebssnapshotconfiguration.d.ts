import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The proposed access control configuration for an Amazon EBS volume snapshot. You can propose a configuration for a new Amazon EBS volume snapshot or an Amazon EBS volume snapshot that you own by specifying the user IDs, groups, and optional KMS encryption key. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifySnapshotAttribute.html">ModifySnapshotAttribute</a>.
 */
export declare class EbsSnapshotConfiguration extends SpeakeasyBase {
    groups?: string[];
    kmsKeyId?: string;
    userIds?: string[];
}
