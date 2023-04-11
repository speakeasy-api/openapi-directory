import { SpeakeasyBase } from "../../../internal/utils";
import { SeverityCounts } from "./severitycounts";
/**
 * A response that contains details on the results of a finding aggregation by repository.
 */
export declare class RepositoryAggregationResponse extends SpeakeasyBase {
    accountId?: string;
    affectedImages?: number;
    repository: string;
    severityCounts?: SeverityCounts;
}
