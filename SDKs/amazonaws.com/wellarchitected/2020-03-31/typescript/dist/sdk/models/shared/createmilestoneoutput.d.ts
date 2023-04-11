import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output of a create milestone call.
 */
export declare class CreateMilestoneOutput extends SpeakeasyBase {
    /**
     * <p>The milestone number.</p> <p>A workload can have a maximum of 100 milestones.</p>
     */
    milestoneNumber?: number;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
