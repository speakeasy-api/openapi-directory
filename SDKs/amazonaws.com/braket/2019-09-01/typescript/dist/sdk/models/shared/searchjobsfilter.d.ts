import { SpeakeasyBase } from "../../../internal/utils";
import { SearchJobsFilterOperatorEnum } from "./searchjobsfilteroperatorenum";
/**
 * A filter used to search for Amazon Braket jobs.
 */
export declare class SearchJobsFilter extends SpeakeasyBase {
    name: string;
    operator: SearchJobsFilterOperatorEnum;
    values: string[];
}
