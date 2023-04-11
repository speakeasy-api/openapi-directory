import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetCommitteesCommitteeTypeEnum {
    Unknown = "",
    C = "C",
    D = "D",
    E = "E",
    H = "H",
    I = "I",
    N = "N",
    O = "O",
    P = "P",
    Q = "Q",
    S = "S",
    U = "U",
    V = "V",
    W = "W",
    X = "X",
    Y = "Y",
    Z = "Z"
}
export declare enum GetCommitteesDesignationEnum {
    Unknown = "",
    A = "A",
    J = "J",
    P = "P",
    U = "U",
    B = "B",
    D = "D"
}
export declare enum GetCommitteesFilingFrequencyEnum {
    Unknown = "",
    A = "A",
    M = "M",
    N = "N",
    Q = "Q",
    T = "T",
    W = "W",
    MinusA = "-A",
    MinusT = "-T"
}
export declare enum GetCommitteesOrganizationTypeEnum {
    Unknown = "",
    C = "C",
    L = "L",
    M = "M",
    T = "T",
    V = "V",
    W = "W"
}
export declare class GetCommitteesRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * API key for https://api.data.gov. Get one at https://api.data.gov/signup.
     *
     */
    apiKey: string;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId?: string[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each committee or filer registered with the FEC. In general committee id's begin with the letter C which is followed by eight digits.
     *
     */
    committeeId?: string[];
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
    committeeType?: GetCommitteesCommitteeTypeEnum[];
    /**
     *
     * @remarks
     * A two year election cycle that the committee was active- (after original registration
     * date but before expiration date in Form 1s) The cycle begins with
     * an odd year and is named for its ending, even year.
     *
     */
    cycle?: number[];
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
    designation?: GetCommitteesDesignationEnum[];
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
    filingFrequency?: GetCommitteesFilingFrequencyEnum[];
    /**
     * Filter for committees whose first Form 1 was received on or before this date.
     */
    maxFirstF1Date?: Date;
    /**
     * Filter for committees whose first filing was received on or before this date.
     */
    maxFirstFileDate?: Date;
    /**
     * Filter for committees whose latest Form 1 was received on or before this date.
     */
    maxLastF1Date?: Date;
    /**
     * Filter for committees whose first Form 1 was received on or after this date.
     */
    minFirstF1Date?: Date;
    /**
     * Filter for committees whose first filing was received on or after this date.
     */
    minFirstFileDate?: Date;
    /**
     * Filter for committees whose latest Form 1 was received on or after this date.
     */
    minLastF1Date?: Date;
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
    organizationType?: GetCommitteesOrganizationTypeEnum[];
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * Three-letter code for the party affiliated with a candidate or committee. For example, DEM for Democratic Party and REP for Republican Party.
     */
    party?: string[];
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     */
    q?: string[];
    /**
     * Provide a field to sort by. Use `-` for descending order.
     *
     * @remarks
     *
     */
    sort?: string;
    /**
     * Hide null values on sorted column(s).
     */
    sortHideNull?: boolean;
    /**
     * Toggle that filters out all rows having sort column that is non-null
     */
    sortNullOnly?: boolean;
    /**
     * Toggle that sorts null values last
     */
    sortNullsLast?: boolean;
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office. This is a filter for Leadership PAC sponsor.
     *
     */
    sponsorCandidateId?: string[];
    /**
     * US state or territory
     */
    state?: string[];
    /**
     * Name of the Committee's treasurer. If multiple treasurers for the committee, the most recent treasurer will be shown.
     */
    treasurerName?: string[];
    /**
     * A year that the committee was active— (after original registration date     or filing but before expiration date)
     */
    year?: number[];
}
export declare class GetCommitteesResponse extends SpeakeasyBase {
    committeePage?: shared.CommitteePage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
