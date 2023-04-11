import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommitteeDetailJfcCommittee extends SpeakeasyBase {
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
export declare class CommitteeDetail extends SpeakeasyBase {
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
     * City of committee custodian as reported on the Form 1
     *
     */
    custodianCity?: string;
    /**
     *
     * @remarks
     * Name 1 of committee custodian as reported on the Form 1
     *
     */
    custodianName1?: string;
    /**
     *
     * @remarks
     * Name 2 of committee custodian as reported on the Form 1
     *
     */
    custodianName2?: string;
    /**
     *
     * @remarks
     * Full name of committee custodian as reported on the Form 1
     *
     */
    custodianNameFull?: string;
    /**
     *
     * @remarks
     * Middle name of committee custodian as reported on the Form 1
     *
     */
    custodianNameMiddle?: string;
    /**
     *
     * @remarks
     * Name prefix of committee custodian as reported on the Form 1
     *
     */
    custodianNamePrefix?: string;
    /**
     *
     * @remarks
     * Suffix name of the committee custodian as reported on the Form 1
     *
     */
    custodianNameSuffix?: string;
    /**
     *
     * @remarks
     * Name title of the committee custodian as reported on the Form 1
     *
     */
    custodianNameTitle?: string;
    /**
     *
     * @remarks
     * Phone number of committee custodian as reported on the Form 1
     *
     */
    custodianPhone?: string;
    /**
     *
     * @remarks
     * State of committee custodian as reported on the Form 1
     *
     */
    custodianState?: string;
    /**
     *
     * @remarks
     * Street address of the committee custodian as reported on the Form 1
     *
     */
    custodianStreet1?: string;
    /**
     *
     * @remarks
     * Second line of the street address of the committee custodian as reported on the Form 1
     *
     */
    custodianStreet2?: string;
    /**
     *
     * @remarks
     * Zip code of the committee custodian as reported on the Form 1
     *
     */
    custodianZip?: string;
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
     *
     * @remarks
     * Email as reported on the Form 1
     *
     */
    email?: string;
    /**
     *
     * @remarks
     * Fax as reported on the Form 1
     *
     */
    fax?: string;
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
     * The form where the underlying data comes from, for example, Form 1 would appear as F1:
     *
     * @remarks
     *     - F1   Statement of Organization
     *     - F1M  Notification of Multicandidate Status
     *     - F2   Statement of Candidacy
     *     - F3   Report of Receipts and Disbursements for an Authorized Committee
     *     - F3P  Report of Receipts and Disbursements by an Authorized Committee of a Candidate for     The Office of President or Vice President
     *     - F3L  Report of Contributions Bundled by Lobbyists/Registrants and Lobbyist/Registrant PACs
     *     - F3X  Report of Receipts and Disbursements for other than an Authorized Committee
     *     - F4   Report of Receipts and Disbursements for a Committee or Organization Supporting a Nomination Convention
     *     - F5   Report of Independent Expenditures Made and Contributions Received
     *     - F6   48 Hour Notice of Contributions/Loans Received
     *     - F7   Report of Communication Costs by Corporations and Membership Organizations
     *     - F8   Debt Settlement Plan
     *     - F9   24 Hour Notice of Disbursements for Electioneering Communications
     *     - F13  Report of Donations Accepted for Inaugural Committee
     *     - F99  Miscellaneous Text
     *     - FRQ  Request for Additional Information
     *
     */
    formType?: string;
    jfcCommittee?: CommitteeDetailJfcCommittee[];
    /**
     * The day the FEC received the committee's most recent Form 1
     */
    lastF1Date?: Date;
    /**
     * The day the FEC received the committee's most recent filing
     */
    lastFileDate?: Date;
    /**
     *
     * @remarks
     * Indicates if the committee is a leadership PAC
     *
     */
    leadershipPac?: string;
    /**
     *
     * @remarks
     * Indicates if the committee is a lobbyist registrant PAC
     *
     */
    lobbyistRegistrantPac?: string;
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
     * Code for the type of party the committee is, only if applicable
     *
     */
    partyType?: string;
    /**
     *
     * @remarks
     * Description of the type of party the committee is, only if applicable
     *
     */
    partyTypeFull?: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office. This is a filter for Leadership PAC sponsor.
     *
     */
    sponsorCandidateIds?: string[];
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
     *
     * @remarks
     * City of committee treasurer as reported on the Form 1
     *
     */
    treasurerCity?: string;
    /**
     * Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
     */
    treasurerName?: string;
    /**
     *
     * @remarks
     * Name 1 of committee treasurer as reported on the Form 1
     *
     */
    treasurerName1?: string;
    /**
     *
     * @remarks
     * Name 2 of committee treasurer as reported on the Form 1
     *
     */
    treasurerName2?: string;
    /**
     *
     * @remarks
     * Middle name of committee treasurer as reported on the Form 1
     *
     */
    treasurerNameMiddle?: string;
    /**
     *
     * @remarks
     * Name Prefix of committee treasurer as reported on the Form 1
     *
     */
    treasurerNamePrefix?: string;
    /**
     *
     * @remarks
     * Name suffix of committee treasurer as reported on the Form 1
     *
     */
    treasurerNameSuffix?: string;
    /**
     *
     * @remarks
     * Name title of committee treasurer as reported on the Form 1
     *
     */
    treasurerNameTitle?: string;
    /**
     *
     * @remarks
     * Phone of committee treasurer as reported on the Form 1
     *
     */
    treasurerPhone?: string;
    /**
     *
     * @remarks
     * State of committee treasurer as reported on the Form 1
     *
     */
    treasurerState?: string;
    /**
     *
     * @remarks
     * Street of committee treasurer as reported on the Form 1
     *
     */
    treasurerStreet1?: string;
    /**
     *
     * @remarks
     * Second line of the street of committee treasurer as reported on the Form 1
     *
     */
    treasurerStreet2?: string;
    /**
     *
     * @remarks
     * Zip code of committee treasurer as reported on the Form 1
     *
     */
    treasurerZip?: string;
    /**
     *
     * @remarks
     * Website url as reported on the Form 1
     *
     */
    website?: string;
    /**
     *
     * @remarks
     * Zip code of committee as reported on the Form 1
     *
     */
    zip?: string;
}
