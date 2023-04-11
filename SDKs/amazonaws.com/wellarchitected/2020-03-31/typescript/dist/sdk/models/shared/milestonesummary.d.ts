import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadSummary } from "./workloadsummary";
/**
 * A milestone summary return object.
 */
export declare class MilestoneSummary extends SpeakeasyBase {
    /**
     * <p>The name of the milestone in a workload.</p> <p>Milestone names must be unique within a workload.</p>
     */
    milestoneName?: string;
    /**
     * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
     */
    milestoneNumber?: number;
    /**
     * The date and time recorded.
     */
    recordedAt?: Date;
    /**
     * A workload summary return object.
     */
    workloadSummary?: WorkloadSummary;
}
