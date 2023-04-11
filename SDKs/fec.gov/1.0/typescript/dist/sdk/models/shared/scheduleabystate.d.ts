import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduleAByState extends SpeakeasyBase {
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
     * US state or territory
     */
    state: string;
    /**
     * US state or territory
     */
    stateFull: string;
    /**
     * Sum of transactions
     */
    total?: number;
}
