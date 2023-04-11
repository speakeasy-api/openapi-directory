import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduleBByRecipientID extends SpeakeasyBase {
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId: string;
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
     *
     * @remarks
     * Number of records making up the total.
     *
     */
    memoCount?: number;
    /**
     *
     * @remarks
     * Schedule B disbursements aggregated by memoed items only
     *
     */
    memoTotal?: number;
    /**
     * The FEC identifier should be represented here if the entity receiving the disbursement is registered with the FEC.
     */
    recipientId: string;
    recipientName?: string;
    /**
     *
     * @remarks
     * Schedule B disbursements aggregated by non-memoed items only
     *
     */
    total?: number;
}
