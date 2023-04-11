import { SpeakeasyBase } from "../../../internal/utils";
export declare class PresidentialByCandidate extends SpeakeasyBase {
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
     * Candidate last name
     *
     */
    candidateLastName?: string;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    candidatePartyAffiliation?: string;
    /**
     * State of contributor
     */
    contributorState?: string;
    /**
     * Year of election
     */
    electionYear?: number;
    /**
     * Net contributions
     */
    netReceipts?: number;
    /**
     *
     * @remarks
     * Net receipts, in millions
     *
     */
    roundedNetReceipts?: number;
}
