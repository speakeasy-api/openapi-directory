import { SpeakeasyBase } from "../../../internal/utils";
import { CheckSummary } from "./checksummary";
/**
 * Success
 */
export declare class ListCheckSummariesOutput extends SpeakeasyBase {
    checkSummaries?: CheckSummary[];
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
}
