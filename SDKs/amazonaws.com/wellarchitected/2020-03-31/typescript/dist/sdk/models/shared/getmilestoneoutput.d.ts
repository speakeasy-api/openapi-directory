import { SpeakeasyBase } from "../../../internal/utils";
import { Milestone } from "./milestone";
/**
 * Output of a get milestone call.
 */
export declare class GetMilestoneOutput extends SpeakeasyBase {
    /**
     * A milestone return object.
     */
    milestone?: Milestone;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
