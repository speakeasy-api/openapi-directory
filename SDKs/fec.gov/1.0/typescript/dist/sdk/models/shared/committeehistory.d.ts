import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommitteeHistoryJfcCommittee extends SpeakeasyBase {
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    jointCommitteeId?: string;
    /**
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     */
    jointCommitteeName?: string;
}
export declare class CommitteeHistory extends SpeakeasyBase {
    /**
     *
     * @remarks
     * Affiliated committee or connected organization
     *
     */
    affiliatedCommitteeName?: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateIds?: string[];
    /**
     *
     * @remarks
     * City of committee as reported on the Form 1
     *
     */
    city?: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId: string;
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
     *
     */
    committeeType?: string;
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
     *
     */
    committeeTypeFull?: string;
    /**
     *
     * @remarks
     * A two year election cycle that the committee was active- (after original registration
     * date but before expiration date in Form 1s) The cycle begins with
     * an odd year and is named for its ending, even year.
     *
     */
    cycle: number;
    /**
     *
     * @remarks
     * A two year election cycle that the committee was active- (after original registration
     * date but before expiration date in Form 1s) The cycle begins with
     * an odd year and is named for its ending, even year.
     *
     */
    cycles?: number[];
    /**
     *
     * @remarks
     * A two year election cycle that the committee was active- (after original registration
     * date but before expiration date in Form 1), and the committee has filling activity during the cycle
     *
     */
    cyclesHasActivity?: number[];
    /**
     *
     * @remarks
     * A two year election cycle that the committee was active- (after original registration
     * date but before expiration date in Form 1s), and the committee files the financial reports
     * ('F3', 'F3X', 'F3P', 'F3L', 'F4', 'F5', 'F7', 'F13') during this cycle.
     *
     */
    cyclesHasFinancial?: number[];
    /**
     * The one-letter designation code of the organization:
     *
     * @remarks
     *          - A authorized by a candidate
     *          - J joint fundraising committee
     *          - P principal campaign committee of a candidate
     *          - U unauthorized
     *          - B lobbyist/registrant PAC
     *          - D leadership PAC
     *
     */
    designation?: string;
    /**
     * The one-letter designation code of the organization:
     *
     * @remarks
     *          - A authorized by a candidate
     *          - J joint fundraising committee
     *          - P principal campaign committee of a candidate
     *          - U unauthorized
     *          - B lobbyist/registrant PAC
     *          - D leadership PAC
     *
     */
    designationFull?: string;
    /**
     * The one-letter
     *
     * @remarks
     *     code of the filing frequency:
     *          - A Administratively terminated
     *          - D Debt
     *          - M Monthly filer
     *          - Q Quarterly filer
     *          - T Terminated
     *          - W Waived
     *
     */
    filingFrequency?: string;
    /**
     * The day the FEC received the committee's first Form 1
     */
    firstF1Date?: Date;
    /**
     * The day the FEC received the committee's first filing. This is usually a Form 1 committee registration.
     */
    firstFileDate?: Date;
    /**
     *
     * @remarks
     * True indicates that a committee is active.
     *
     */
    isActive?: boolean;
    jfcCommittee?: CommitteeHistoryJfcCommittee[];
    /**
     *
     * @remarks
     * The latest two year election cycle that the committee has filings
     *
     */
    lastCycleHasActivity?: number;
    /**
     *
     * @remarks
     * The latest two year election cycle that the committee files the financial reports
     * ('F3', 'F3X', 'F3P', 'F3L', 'F4', 'F5', 'F7', 'F13').
     *
     */
    lastCycleHasFinancial?: number;
    /**
     * The day the FEC received the committee's most recent Form 1
     */
    lastF1Date?: Date;
    /**
     * The day the FEC received the committee's most recent filing
     */
    lastFileDate?: Date;
    /**
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     */
    name?: string;
    /**
     * The one-letter code for the kind for organization:
     *
     * @remarks
     *         - C corporation
     *         - L labor organization
     *         - M membership organization
     *         - T trade association
     *         - V cooperative
     *         - W corporation without capital stock
     *
     */
    organizationType?: string;
    /**
     * The one-letter code for the kind for organization:
     *
     * @remarks
     *         - C corporation
     *         - L labor organization
     *         - M membership organization
     *         - T trade association
     *         - V cooperative
     *         - W corporation without capital stock
     *
     */
    organizationTypeFull?: string;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    party?: string;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    partyFull?: string;
    /**
     *
     * @remarks
     * State of the committee's address as filed on the Form 1
     *
     */
    state?: string;
    /**
     *
     * @remarks
     * State of committee as reported on the Form 1
     *
     */
    stateFull?: string;
    /**
     *
     * @remarks
     * Street address of committee as reported on the Form 1
     *
     */
    street1?: string;
    /**
     *
     * @remarks
     * Second line of street address of committee as reported on the Form 1
     *
     */
    street2?: string;
    /**
     * Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
     */
    treasurerName?: string;
    /**
     *
     * @remarks
     * Zip code of committee as reported on the Form 1
     *
     */
    zip?: string;
}
