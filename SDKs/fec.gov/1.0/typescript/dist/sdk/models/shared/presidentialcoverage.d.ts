import { SpeakeasyBase } from "../../../internal/utils";
export declare class PresidentialCoverage extends SpeakeasyBase {
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
     * Ending date of the reporting period
     */
    coverageEndDate?: Date;
    /**
     * Year of election
     */
    electionYear?: number;
}
