import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadSummary } from "./workloadsummary";
/**
 * Output of a list workloads call.
 */
export declare class ListWorkloadsOutput extends SpeakeasyBase {
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
    /**
     * A list of workload summaries.
     */
    workloadSummaries?: WorkloadSummary[];
}
