import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadShare } from "./workloadshare";
/**
 * Input for Update Workload Share
 */
export declare class UpdateWorkloadShareOutput extends SpeakeasyBase {
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
    /**
     * A workload share return object.
     */
    workloadShare?: WorkloadShare;
}
