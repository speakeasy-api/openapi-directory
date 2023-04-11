import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduleAByEmployer extends SpeakeasyBase {
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId: string;
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
     * Employer of contributor as reported on the committee's filing
     */
    employer: string;
    /**
     * Sum of transactions
     */
    total?: number;
}
