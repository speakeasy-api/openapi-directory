import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSchedulesScheduleAByStateTotalsRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     * The one-letter type code of the organization:
     *
     * @remarks
     *         - C communication cost
     *         - D delegate
     *         - E electioneering communication
     *         - H House
     *         - I independent expenditure filer (not a committee)
     *         - N PAC - nonqualified
     *         - O independent expenditure-only (super PACs)
     *         - P presidential
     *         - Q PAC - qualified
     *         - S Senate
     *         - U single candidate independent expenditure
     *         - V PAC with non-contribution account, nonqualified
     *         - W PAC with non-contribution account, qualified
     *         - X party, nonqualified
     *         - Y party, qualified
     *         - Z national party non-federal account
     *         - all All Committee Types
     *         - all_candidates All Candidate Committee Types (H, S, P)
     *         - all_pacs All PAC Committee Types (N, O, Q, V, W)
     *
     */
    committeeType?: string[];
    /**
     *
     * @remarks
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     *
     */
    cycle?: number[];
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     * Provide a field to sort by. Use `-` for descending order.
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * Hide null values on sorted column(s).
     */
    sortHideNull?: boolean;
    /**
     * Toggle that filters out all rows having sort column that is non-null
     */
    sortNullOnly?: boolean;
    /**
     * Toggle that sorts null values last
     */
    sortNullsLast?: boolean;
    /**
     * US state or territory
     */
    state?: string[];
}
export declare class GetSchedulesScheduleAByStateTotalsResponse extends SpeakeasyBase {
    contentType: string;
    scheduleAByStateRecipientTotalsPage?: shared.ScheduleAByStateRecipientTotalsPage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
