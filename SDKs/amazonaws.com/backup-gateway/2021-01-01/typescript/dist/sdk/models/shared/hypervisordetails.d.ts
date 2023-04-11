import { SpeakeasyBase } from "../../../internal/utils";
import { HypervisorStateEnum } from "./hypervisorstateenum";
import { SyncMetadataStatusEnum } from "./syncmetadatastatusenum";
/**
 * These are the details of the specified hypervisor. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.
 */
export declare class HypervisorDetails extends SpeakeasyBase {
    host?: string;
    hypervisorArn?: string;
    kmsKeyArn?: string;
    lastSuccessfulMetadataSyncTime?: Date;
    latestMetadataSyncStatus?: SyncMetadataStatusEnum;
    latestMetadataSyncStatusMessage?: string;
    logGroupArn?: string;
    name?: string;
    state?: HypervisorStateEnum;
}
