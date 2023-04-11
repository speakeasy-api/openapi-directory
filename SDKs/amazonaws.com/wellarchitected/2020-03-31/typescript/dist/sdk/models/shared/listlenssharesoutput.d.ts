import { SpeakeasyBase } from "../../../internal/utils";
import { LensShareSummary } from "./lenssharesummary";
/**
 * Success
 */
export declare class ListLensSharesOutput extends SpeakeasyBase {
    lensShareSummaries?: LensShareSummary[];
    /**
     * The token to use to retrieve the next set of results.
     */
    nextToken?: string;
}
