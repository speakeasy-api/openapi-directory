import { SpeakeasyBase } from "../../../internal/utils";
import { AwsBackupBackupPlanLifecycleDetails } from "./awsbackupbackupplanlifecycledetails";
/**
 * An array of <code>CopyAction</code> objects, each of which contains details of the copy operation.
 */
export declare class AwsBackupBackupPlanRuleCopyActionsDetails extends SpeakeasyBase {
    destinationBackupVaultArn?: string;
    lifecycle?: AwsBackupBackupPlanLifecycleDetails;
}
