import { SpeakeasyBase } from "../../../internal/utils";
export declare class PresidentialBySize extends SpeakeasyBase {
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *   -P00000001    All candidates
     *   -P00000002    Democrasts
     *   -P00000003    Republicans
     *
     */
    candidateId?: string;
    /**
     *
     * @remarks
     * Contributions received
     *
     */
    contributionReceiptAmount?: number;
    /**
     * Year of election
     */
    electionYear?: number;
    /**
     *
     * @remarks
     * The total all contributions in the following ranges:
     * ```
     *   -0    $200 and under
     *   -200  $200.01 - $499.99
     *   -500  $500 - $999.99
     *   -1000 $1000 - $1999.99
     *   -2000 $2000 +
     * ```
     * Unitemized contributions are included in the `0` category.
     *
     */
    size?: number;
    /**
     *
     * @remarks
     * The total all contributions range id.
     *
     */
    sizeRangeId?: number;
}
