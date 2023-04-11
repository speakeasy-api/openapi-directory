import { SpeakeasyBase } from "../../../internal/utils";
export declare class CandidateHistoryTotal extends SpeakeasyBase {
    /**
     * Last year a candidate was active. This field is specific to the candidate_id so if the same person runs for another office, there may be a different record for them.
     */
    activeThrough?: number;
    /**
     * City of candidate's address, as reported on their Form 2.
     */
    addressCity?: string;
    /**
     * State of candidate's address, as reported on their Form 2.
     */
    addressState?: string;
    /**
     * Street of candidate's address, as reported on their Form 2.
     */
    addressStreet1?: string;
    /**
     * Additional street information of candidate's address, as reported on their Form 2.
     */
    addressStreet2?: string;
    /**
     * Zip code of candidate's address, as reported on their Form 2.
     */
    addressZip?: string;
    /**
     * The last year of the cycle for this election.
     */
    candidateElectionYear?: number;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId: string;
    /**
     *
     * @remarks
     * True indicates that a candidate is inactive.
     *
     */
    candidateInactive?: boolean;
    /**
     * One-letter code explaining if the candidate is:
     *
     * @remarks
     *         - C present candidate
     *         - F future candidate
     *         - N not yet a candidate
     *         - P prior candidate
     *
     */
    candidateStatus?: string;
    /**
     * Ending cash balance on the most recent filing
     */
    cashOnHandEndPeriod?: number;
    /**
     * Ending date of the reporting period
     */
    coverageEndDate?: Date;
    /**
     * Beginning date of the reporting period
     */
    coverageStartDate?: Date;
    /**
     *
     * @remarks
     * Filter records to only those that are applicable to a given two-year
     * period. This cycle follows the traditional House election cycle and
     * subdivides the presidential and Senate elections into comparable
     * two-year blocks. The cycle begins with an odd year and is named for its
     * ending, even year.
     *
     */
    cycle: number;
    /**
     *
     * @remarks
     * Two-year election cycle in which a candidate runs for office.
     * Calculated from Form 2. The cycle begins with
     * an odd year and is named for its ending, even year. This cycle follows
     * the traditional house election cycle and subdivides the presidential
     * and Senate elections into comparable two-year blocks. To retrieve data for
     * the entire four years of a presidential term or six years of a senatorial term,
     * you will need the `election_full` flag.
     *
     */
    cycles?: number[];
    /**
     * Debts owed by the committee
     */
    debtsOwedByCommittee?: number;
    disbursements?: number;
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    district?: string;
    /**
     * One-letter code explaining if the candidate is:
     *
     * @remarks
     *         - C present candidate
     *         - F future candidate
     *         - N not yet a candidate
     *         - P prior candidate
     *
     */
    districtNumber?: number;
    /**
     * Two-digit US House distirict of the office the candidate is running for. Presidential, Senate and House at-large candidates will have District 00.
     */
    electionDistricts?: string[];
    /**
     * Year of election
     */
    electionYear?: number;
    /**
     * Years in which a candidate ran for office.
     */
    electionYears?: number[];
    /**
     * FEC cycles are included in candidate election years.
     */
    fecCyclesInElection?: number[];
    /**
     * A boolean the describes if a presidential candidate has accepted federal funds. The flag will be false for House and Senate candidates.
     */
    federalFundsFlag?: boolean;
    /**
     * The day the FEC received the candidate's first filing. This is a F2 candidate registration.
     */
    firstFileDate?: Date;
    flags?: string;
    /**
     * A boolean that describes if a candidate's committee has ever received any receipts for their campaign for this particular office. (Candidates have separate candidate IDs for each office.)
     */
    hasRaisedFunds?: boolean;
    /**
     * One-letter code ('I', 'C', 'O') explaining if the candidate is an incumbent, a challenger, or if the seat is open.
     */
    incumbentChallenge?: string;
    /**
     * Explains if the candidate is an incumbent, a challenger, or if the seat is open.
     */
    incumbentChallengeFull?: string;
    /**
     * Individual itemized contributions are from individuals whose aggregate contributions total over $200 per individual per year. Be aware, some filers choose to itemize donations $200 or less.
     */
    individualItemizedContributions?: number;
    isElection: boolean;
    /**
     * The day the FEC received the candidate's most recent Form 2
     */
    lastF2Date?: Date;
    /**
     * The day the FEC received the candidate's most recent filing
     */
    lastFileDate?: Date;
    /**
     * Date the information was loaded into the FEC systems. This can be affected by reseting systems and other factors, refer to receipt_date for the day that the FEC received the paper or electronic document. Keep in mind that paper filings take more time to process and there can be a lag between load_date and receipt_date. This field can be helpful to identify paper records that have been processed recently.
     */
    loadDate?: Date;
    /**
     * Name of candidate running for office
     */
    name?: string;
    /**
     * Federal office candidate runs for: H, S or P
     */
    office?: string;
    /**
     * Federal office candidate runs for: House, Senate or presidential
     */
    officeFull?: string;
    /**
     * Other committees contributions
     */
    otherPoliticalCommitteeContributions?: number;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    party?: string;
    /**
     * Party affiliated with a candidate or committee
     */
    partyFull?: string;
    receipts?: number;
    /**
     * Rounded election years in which a candidate ran for office
     */
    roundedElectionYears?: number[];
    /**
     * US state or territory where a candidate runs for office
     */
    state?: string;
    /**
     * Transfers from authorized committees
     */
    transfersFromOtherAuthorizedCommittee?: number;
    /**
     *
     * @remarks
     * Two-year election cycle in which a candidate runs for office.
     * Calculated from Form 2. The cycle begins with
     * an odd year and is named for its ending, even year. This cycle follows
     * the traditional house election cycle and subdivides the presidential
     * and Senate elections into comparable two-year blocks. To retrieve data for
     * the entire four years of a presidential term or six years of a senatorial term,
     * you will need the `election_full` flag.
     *
     */
    twoYearPeriod: number;
}
