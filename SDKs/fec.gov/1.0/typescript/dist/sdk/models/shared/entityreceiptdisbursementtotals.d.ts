import { SpeakeasyBase } from "../../../internal/utils";
export declare class EntityReceiptDisbursementTotals extends SpeakeasyBase {
    /**
     * Cumulative candidate disbursements in a two year period, adjusted to avoid double counting.
     */
    cumulativeCandidateDisbursements?: number;
    /**
     * Cumulative candidate receipts in a two year period, adjusted to avoid double counting.
     */
    cumulativeCandidateReceipts?: number;
    /**
     * Cumulative PAC disbursements in a two year period, adjusted to avoid double counting.
     */
    cumulativePacDisbursements?: number;
    /**
     * Cumulative PAC recipts in a two year period, adjusted to avoid double counting.
     */
    cumulativePacReceipts?: number;
    /**
     * Cumulative party disbursements in a two year period, adjusted to avoid double counting.
     */
    cumulativePartyDisbursements?: number;
    /**
     * Cumulative party receipts in a two year period, adjusted to avoid double counting.
     */
    cumulativePartyReceipts?: number;
    /**
     *
     * @remarks
     * Filter records to only those that were applicable to a given
     * two-year period.The cycle begins with an odd year and is named
     * for its ending, even year.
     *
     */
    cycle?: number;
    endDate?: Date;
}
