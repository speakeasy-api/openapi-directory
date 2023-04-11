import { SpeakeasyBase } from "../../../internal/utils";
import { MilestoneSummary } from "./milestonesummary";
/**
 * Output of a list milestones call.
 */
export declare class ListMilestonesOutput extends SpeakeasyBase {
    /**
     * A list of milestone summaries.
     */
    milestoneSummaries?: MilestoneSummary[];
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
}
