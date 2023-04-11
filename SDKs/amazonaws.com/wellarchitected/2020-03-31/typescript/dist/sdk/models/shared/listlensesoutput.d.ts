import { SpeakeasyBase } from "../../../internal/utils";
import { LensSummary } from "./lenssummary";
/**
 * Output of a list lenses call.
 */
export declare class ListLensesOutput extends SpeakeasyBase {
    /**
     * List of lens summaries of available lenses.
     */
    lensSummaries?: LensSummary[];
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
}
