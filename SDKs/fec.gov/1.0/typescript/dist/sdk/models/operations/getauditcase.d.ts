import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAuditCaseRequest extends SpeakeasyBase {
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
     * Primary/foreign key for audit tables
     *
     */
    auditCaseId?: string[];
    /**
     *
     * @remarks
     * The audit issue. Each subcategory has an unique ID
     *
     */
    auditId?: number[];
    /**
     *
     * @remarks
     * A unique identifier assigned to each candidate registered with the FEC.
     * If a person runs for several offices, that person will have separate candidate IDs for each office.
     *
     */
    candidateId?: string[];
    /**
     * Type of committee:
     *
     * @remarks
     *         - H or S - Congressional
     *         - P - Presidential
     *         - X or Y or Z - Party
     *         - N or Q - PAC
     *         - I - Independent expenditure
     *         - O - Super PAC
     *
     */
    committeeDesignation?: string;
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
    committeeType?: string[];
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
    cycle?: number[];
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
    maxElectionCycle?: number;
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
    minElectionCycle?: number;
    /**
     * For paginating through results, starting at page 1
     */
    page?: number;
    /**
     * The number of results returned per page. Defaults to 20.
     */
    perPage?: number;
    /**
     *
     * @remarks
     * Audit category ID (table PK)
     *
     */
    primaryCategoryId?: string;
    /**
     * The name of the committee. If a committee changes its name,     the most recent name will be shown. Committee names are not unique. Use committee_id     for looking up records.
     */
    q?: string[];
    /**
     * Name of candidate running for office
     */
    qq?: string[];
    /**
     *
     * @remarks
     * Provide a field to sort by. Use `-` for descending order. ex: `-case_no`
     *
     */
    sort?: string[];
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
     * The finding id of an audit. Finding are a category of broader issues. Each category has an unique ID.
     *
     */
    subCategoryId?: string;
}
export declare class GetAuditCaseResponse extends SpeakeasyBase {
    auditCasePage?: shared.AuditCasePage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
