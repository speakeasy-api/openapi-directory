import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadShareSummary } from "./workloadsharesummary";
/**
 * Input for List Workload Share
 */
export declare class ListWorkloadSharesOutput extends SpeakeasyBase {
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * The ID assigned to the workload. This ID is unique within an Amazon Web Services Region.
     */
    workloadId?: string;
    /**
     * A list of workload share summaries.
     */
    workloadShareSummaries?: WorkloadShareSummary[];
}
