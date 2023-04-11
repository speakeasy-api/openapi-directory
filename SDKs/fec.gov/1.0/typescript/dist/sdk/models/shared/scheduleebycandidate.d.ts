import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduleEByCandidate extends SpeakeasyBase {
    candidateId?: string;
    candidateName?: string;
    committeeId?: string;
    committeeName?: string;
    /**
     *
     * @remarks
     * Number of records making up the total.
     *
     */
    count?: number;
    /**
     *
     * @remarks
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     *
     */
    cycle: number;
    /**
     * Explains if the money was spent in order to support or oppose a candidate or candidates. (Coded S or O for support or oppose.) This indicator applies to independent expenditures and communication costs.
     */
    supportOpposeIndicator: string;
    /**
     * Sum of transactions
     */
    total?: number;
}
